fetch('https://rickandmortyapi.com/api/character', {
  method: 'GET',
})



.then(response => response.json())
.then(function(json) {
  const imageCard = document.querySelector('.container-card')

  json.results.map(function(results) {
    imageCard.innerHTML += `
      <div class="card"> <img src="${results.image}"><br>
      <h1>Name: ${results.name}</h1>
      <p>Species: ${results.species}</p>
      <p>Status: ${results.status}</p>
      <p>Genre: ${results.gender}</p>
      </div>
    `
  })


})

fetch('https://rickandmortyapi.com/api/character/?page=2', {
  method: 'GET',
})

.then(response => response.json())
.then(function(json) {
  const imageCard = document.querySelector('.container-card')

  json.results.map(function(results) {
    imageCard.innerHTML += `
    <div class="card"> <img src="${results.image}"><br>
    <h1>Name: ${results.name}</h1>
    <p>Species: ${results.species}</p>
    <p>Status: ${results.status}</p>
    <p>Genre: ${results.gender}</p>
    </div>
    `
  })


})