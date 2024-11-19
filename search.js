const searchInput = document.getElementById('search-input')

console.log('Valore input iniziale', searchInput.value)

const searchForm = document.getElementById('search-form')

searchForm.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log('Valore input finale', searchInput.value)
  const searchRow = document.getElementById('search-result-row')

  searchRow.innerHTML = ``
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
        const newCol = document.createElement('div')
        newCol.classList.add('col', 'col-lg-12')
        newCol.innerHTML = `
          <div class="d-flex align-items-center h-70 bg-testo  rounded">
              <img src="${singer.artist.picture_small}" class="w-25 me-2 rounded-start" alt=""/>
              <div>
                  <p class="text-light fw-semibold mb-0">${singer.artist.name}</p>
              </div>
          </div>
          `
        searchRow.appendChild(newCol)
      })
    })
    .catch((error) => {
      console.log('Error: ', error)
    })
})
