const searchInput = document.getElementById('search-input')

console.log('Valore input iniziale', searchInput.value)

const searchForm = document.getElementById('search-form')
const searchRow = document.getElementById('search-result-row')

searchForm.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log('Valore input finale', searchInput.value)

  const query = searchInput.value
  const searchURL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`

  fetch(searchURL)
    .then((response) => {
      if (response) {
        return response.json()
      } else {
        throw new Error('Errore nella richiesta!')
      }
    })
    .then((singers) => {
      console.log(singers)

      singers.data.forEach((singer) => {
        fillSearchResult(singer)
      })
    })
    .catch((error) => {
      console.log('Error: ', error)
    })
  searchRow.innerHTML = ``
})

const fillSearchResult = function (cantante) {
  const searchRow = document.getElementById('search-result-row')
  const newCol = document.createElement('div')
  newCol.classList.add('col', 'col-lg-3')

  newCol.innerHTML = `
    
      <div class="card h-100 bg-black p-1" >
        <img src="${cantante.artist.picture_medium}" class="card-img-top" alt="doggo"/>
        <div class="card-body text-light bg-primary">
          <a href="./artist.html?artistId=${cantante.artist.id}" class="text-decoration-none text-light"><h5 class="card-title">${cantante.artist.name}</h5></a>
          <a href="./artist.html?artistId=${cantante.artist.id}" class="text-decoration-none text-light"><p class="card-text">${cantante.title}</p></a>
          <a href="./album.html?albumId=${cantante.album.id}" class="text-decoration-none text-light"><p class="card-text">${cantante.album.title}</p></a>
        </div>
      </div>
    
  `
  searchRow.appendChild(newCol)
}
