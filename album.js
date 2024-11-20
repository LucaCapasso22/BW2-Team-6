// const recuperoDati =function(){
//     fetch(" https://striveschool-api.herokuapp.com/api/deezer/album/6378419")
//     .then((response)=>{
//         if(response.ok){
//             return response.json()
//         }else{throw new Error ("errore nella risppsta")}
//     })
//     .then((album)=>{
//         console.log("questo è l'album",album)
//     })
//     .catch((error)=>{
//         console.log("Orrore",error)
//     })
// }

// recuperoDati()

const apiUrl = 'https://striveschool-api.herokuapp.com/api/deezer/album'
const addressBarContent = new URLSearchParams(window.location.search)
let albumId = addressBarContent.get('albumId')

fetch(apiUrl + '/' + albumId)
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Errore nella chiamata')
    }
  })
  .then((album) => {
    console.log(album)
    const appendAlbum = document.getElementById('appendAlbum')

    appendAlbum.innerHTML = `
              <div class="col col-md-3 p-0 d-flex justify-content-end ">
                <img src=" ${
                  album.cover_xl
                }" class="img-fluid" alt="img album" />
              </div>
              <div
                class="col col-md-9 m-0 d-flex flex-column justify-content-end"
              >
                <p class="small m-0">ALBUM</p>
                <h1>${album.title}</h1>
                <p class="small">
                  <img
                    src="${album.cover_small}"
                    width="25px"
                    class="rounded-circle "
                    alt="img"
                  />
                  ${album.artist.name} • ${album.release_date.slice(0, -6)} • ${
      album.nb_tracks
    } Brani • ${formatDuration1(album.duration)}
                </p>
              </div>
            </div>`
  })
  .catch((error) => {
    console.log('Errore', error)
  })

fetch(apiUrl + '/' + albumId)
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('errore nella risposta')
    }
  })
  .then((album) => {
    const row = document.getElementById('rowParent')
    console.log('questo è album', album)
    album.tracks.data.forEach((song) => {
      console.log('questa è la song', song)
      const songRow = document.createElement('div')
      songRow.classList.add('row')
      songRow.innerHTML = `
            
            <div class="col col-6">${
              song.title
            }<br> <a href="#" class="small" > ${song.artist.name}</a></div>
            <div class="col col-3 d-flex justify-content-around align-items-center">${
              song.rank
            }</div>
            <div class="col col-3 d-flex justify-content-around align-items-center">${formatDuration(
              song.duration
            )}</div>
          `
      row.appendChild(songRow)
    })
  })
  .catch((error) => {
    console.log('orrore', error)
  })

//FUNZIONE PER TRASFORMARE SECONDI IN MINUTI
const formatDuration = function (durationInSeconds) {
  const minutes = Math.floor(durationInSeconds / 60)
  const seconds = durationInSeconds % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

const formatDuration1 = function (durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = durationInSeconds % 60
    return `${minutes} min. ${seconds.toString().padStart(2, '0')} sec. `
  }