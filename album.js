//const recuperoDati =function(){
//    fetch(" https://striveschool-api.herokuapp.com/api/deezer/artist/171625")
//    .then((response)=>{
//        if(response.ok){
//            return response.json()
//        }else{throw new Error ("errore nella risppsta")}
//    })
//    .then((album)=>{
//        console.log("questo è l'artista",album)
//    })
//    .catch((error)=>{
//        console.log("Orrore",error)
//    })}
//
//recuperoDati()

const apiUrl = 'https://striveschool-api.herokuapp.com/api/deezer/album'
const addressBarContent = new URLSearchParams(window.location.search)
let albumId = addressBarContent.get('albumId')

// crea un canvas con l'immagine e ne ritorno il context 2d
const draw = function (img) {
  let canvas = document.createElement('canvas')
  let c = canvas.getContext('2d')
  c.width = canvas.width = img.clientWidth
  c.height = canvas.height = img.clientHeight
  c.clearRect(0, 0, c.width, c.height)
  c.drawImage(img, 0, 0, img.clientWidth, img.clientHeight)
  return c
}

// scompone pixel per pixel e ritorna un oggetto con una mappa della loro frequenza nell'immagine
const getColors = function (c) {
  let col,
    colors = {}
  let pixels, r, g, b, a
  r = g = b = a = 0
  pixels = c.getImageData(0, 0, c.width, c.height)
  for (let i = 0, data = pixels.data; i < data.length; i += 4) {
    r = data[i]
    g = data[i + 1]
    b = data[i + 2]
    a = data[i + 3]
    if (a < 255 / 2) continue
    col = rgbToHex(r, g, b)
    if (!colors[col]) colors[col] = 0
    colors[col]++
  }
  return colors
}

// trova il colore più ricorrente data una mappa di frequenza dei colori
const findMostRecurrentColor = function (colorMap) {
  let highestValue = 0
  let mostRecurrent = null
  for (const hexColor in colorMap) {
    if (colorMap[hexColor] > highestValue) {
      mostRecurrent = hexColor
      highestValue = colorMap[hexColor]
    }
  }
  return mostRecurrent
}

// converte un valore in rgb a un valore esadecimale
const rgbToHex = function (r, g, b) {
  if (r > 255 || g > 255 || b > 255) {
    throw 'Invalid color component'
  } else {
    return ((r << 16) | (g << 8) | b).toString(16)
  }
}

// inserisce degli '0' se necessario davanti al colore in esadecimale per renderlo di 6 caratteri
const pad = function (hex) {
  return ('000000' + hex).slice(-6)
}
const start = function () {
  // prendo il riferimento all'immagine del dom
  let imgReference = document.querySelector('#img')

  // creo il context 2d dell'immagine selezionata
  let context = draw(imgReference)

  // creo la mappa dei colori più ricorrenti nell'immagine
  let allColors = getColors(context)

  // trovo colore più ricorrente in esadecimale
  let mostRecurrent = findMostRecurrentColor(allColors)

  // se necessario, aggiunge degli '0' per rendere il risultato un valido colore esadecimale
  let mostRecurrentHex = pad(mostRecurrent)

  // console.log del risultato
  console.log(mostRecurrentHex)
  const divElement = document.getElementById('sfondo')
  divElement.style.backgroundColor = `#${mostRecurrentHex}`
  const sfondoLg = document.getElementById('sfondoLg')
  sfondoLg.style.background = `linear-gradient(#${mostRecurrentHex} 5%, #000000 15%, #000000 100%)`
}

//SEZIONE  IMG GRANDE E TITOLO ALBUM

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
              <div class="col col-md-3  px-11 d-flex justify-content-end ">
                <img src=" ${album.cover_xl}" id="img"
      crossorigin="anonymous" onload="start()" class="img-fluid shadow  bg-body-tertiary rounded" alt="img album" />
              </div>
              <div
                class="col col-md-9 m-0 d-flex flex-column justify-content-end"
              >
                <p class="small m-0">ALBUM</p>
                <h1 style="text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3)">${
                  album.title
                }</h1>
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
    const favoriteSong = JSON.parse(localStorage.getItem('savedSong'))

    album.tracks.data.forEach((song) => {
      console.log('questa è la song', song)
      const songRow = document.createElement('div')

      songRow.classList.add('row')
      songRow.innerHTML = `
            
            <div class="col col-6 text-light"><a> <i class="fas fa-heart me-2 ${
              favoriteSong.some((s) => s.title === song.title)
                ? 'text-success'
                : ''
            } "
            title-song-id="${song.title}"
             name-artist-id="${song.artist.name}" 
             artist-id="${song.artist.id}">
             </i>
        </a>${song.title}<br> <a href="./artist.html?artistId=${
        song.artist.id
      }" class="small text-decoration-none text-testo ms-4" > ${
        song.artist.name
      }</a></div>
            <div class="col col-3 d-flex justify-content-around align-items-center text-testo">${
              song.rank
            }</div>
            <div class="col col-3 d-flex justify-content-around align-items-center text-testo">${formatDuration(
              song.duration
            )}</div>
          `

      row.appendChild(songRow)
    })
    startPlayer(album.tracks.data[0])
    const cuore = document.querySelectorAll(
      '.fa-heart:not(.fa-heart.like-icon)'
    )
    cuore.forEach((icon) => {
      icon.addEventListener('click', () => {
        const title = icon.getAttribute('title-song-id')

        const name = icon.getAttribute('name-artist-id')
        const artistId = icon.getAttribute('artist-id')
        icon.classList.toggle('text-success')
        let savedSong = localStorage.getItem('savedSong')
        if (savedSong === null) {
          savedSong = []
        } else {
          savedSong = JSON.parse(savedSong)
        }
        const song = {
          title: title,
          artist: name,
          artistId: artistId,
        }
        if (icon.classList.contains('text-success')) {
          if (!savedSong.some((songItem) => songItem.title === song.title)) {
            savedSong.push(song)
          } else {
            savedSong = savedSong.filter(
              (songItem) => songItem.title !== song.title
            )
          }
          localStorage.setItem('savedSong', JSON.stringify(savedSong))
        }
      })
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

//PLAYER
const player = document.getElementById('player')
const playButtonSuccess = document.querySelectorAll(
  '#sfondoLg button.btn-success'
)[0]

const playBtn = document.getElementById('play-btn')

const startPlayer = function (canzone) {
  playButtonSuccess.addEventListener('click', () => {
    console.log(playButtonSuccess)
    player.classList.remove('d-none')
    const playerCover = document.getElementById('player-cover')
    playerCover.setAttribute(`src`, `${canzone.album.cover_small}`)
    const playerTitle = document.getElementById('player-title')
    playerTitle.innerText = `${canzone.title}`
    const playerArtist = document.getElementById('player-artist')
    playerArtist.innerText = `${canzone.artist.name}`
    const audio = document.getElementById('audio')
    audio.setAttribute(`src`, `${canzone.preview}`)
    audio.setAttribute('autoplay', true)
    playBtn.innerHTML = `<i class="fas fa-pause-circle fs-2"></i>`
  })
}
