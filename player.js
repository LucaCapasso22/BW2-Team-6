const apiUrl = 'https://striveschool-api.herokuapp.com/api/deezer/album/'
const addressBarContent = new URLSearchParams(window.location.search)
let albumId = addressBarContent.get('albumId')

fetch(apiUrl + '/' + albumId)
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Errore nella richiesta!')
    }
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log('error', error)
  })
