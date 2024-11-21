const addressBarContent = new URLSearchParams(window.location.search)
const artistId = addressBarContent.get('artistId')

const artistURL = `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`
fetch(artistURL)
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Errore nella richiesta!')
    }
  })
  .then((data) => {
    fillHeroName(data)
  })
  .catch((error) => {
    console.log('Error', error)
  })

fetch(artistURL + '/top?limit=50')
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Errore nella richiesta')
    }
  })
  .then((songs) => {
    console.log(songs)

    const songContainer = document.getElementById('artist-section-song-list')

    songs.data.forEach((song, index) => {
      const newCol = document.createElement('div')
      newCol.classList.add('col', 'col-lg-12')

      if (index > 4) {
        newCol.classList.add('d-none')
      }

      newCol.innerHTML = `
        <a class="row p-3 songRow text-decoration-none text-light" href="#">
            <div class="col col-lg-7 text-nowrap overflow-hidden">
                <span>${index + 1}</span>
                <img src="${
                  song.album.cover
                }" alt="album_cover" width="40" class="mx-2"/>
                <span>${song.title}</span>
            </div>

            <div class="col col-lg-4 d-flex align-items-center">
                <span id="artist-page-download" class="text-testo">${
                  song.rank
                }</span>
            </div>

            <div class="col col-lg-1 d-flex align-items-center">
                <span id="song-duration" class="text-testo">${song.duration
                  .toString()
                  .slice(0, 1)}:${song.duration.toString().slice(1)}</span>
            </div>
        </a>
    `

      songContainer.appendChild(newCol)

      const heroSection = document.getElementById('hero-section-artist')
      const songRow = document.getElementsByClassName('songRow')[index]
      songRow.addEventListener('click', function () {
        heroSection.style.height = '30vh'

        const player = document.getElementById('player')
        player.classList.remove('d-none')
        const playerCover = document.getElementById('player-cover')
        playerCover.setAttribute(`src`, `${song.album.cover_small}`)
        const playerTitle = document.getElementById('player-title')
        playerTitle.innerText = `${song.title}`
        const playerArtist = document.getElementById('player-artist')
        playerArtist.innerText = `${song.artist.name}`
        const audio = document.getElementById('audio')
        audio.setAttribute(`src`, `${song.preview}`)
        const playBtn = document.getElementById('play-btn')

        audio.play()
        playBtn.innerHTML = `<i class="fas fa-pause-circle fs-2"></i>`
      })
    })
  })
  .catch((error) => {
    console.log('Error', error)
  })

const fillHeroName = function (singer) {
  const heroName = document.getElementById('hero-artist-name')
  const newSpan = document.createElement('span')
  newSpan.classList.add('display-1', 'fw-bolder')

  newSpan.innerHTML = `${singer.name}`

  heroName.appendChild(newSpan)
  const fanNum = document.getElementById('fan-number')
  fanNum.innerText = `${singer.nb_fan}`

  const hero = document.getElementById('hero-section-artist')
  hero.setAttribute(
    `style`,
    `background-image: url('${singer.picture_xl}'); background-size: cover; background-position: top;`
  )

  const roundedImg = document.getElementById('artist-img-rounded')
  roundedImg.setAttribute(`src`, `${singer.picture_small}`)

  const artistNameSpan = document.getElementById('artist-name-song-liked')
  artistNameSpan.innerText = `${singer.name}`
}

const expandBtn = document.getElementById('expands-song-list')
expandBtn.addEventListener('click', function () {
  const songCol = document.querySelectorAll('#artist-section-song-list > div')
  const arrayOfCols = Array.from(songCol)
  arrayOfCols.forEach((col, index) => {
    if (col.classList.contains('d-none')) {
      col.classList.remove('d-none')
      expandBtn.innerText = 'VISUALIZZA MENO'
    } else {
      if (index > 4) {
        if (!col.classList.contains('d-none')) {
          col.classList.add('d-none')
          expandBtn.innerText = 'VISUALIZZA ALTRO'
        }
      }
    }
  })
})

// AUDIO CONTROLS

const playBtn = document.getElementById('play-btn')
playBtn.addEventListener('click', function () {
  if (audio.paused) {
    audio.play()
    playBtn.innerHTML = `<i class="fas fa-pause-circle fs-2"></i>`
  } else {
    audio.pause()
    playBtn.innerHTML = `<i class="fas fa-play-circle fs-2"></i>`
  }
})

const volumeBtn = document.getElementById('volume-btn')
volumeBtn.addEventListener('click', function () {
  if (audio.muted) {
    audio.muted = false
    volumeBtn.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#8B8B8B"
                  class="bi bi-volume-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"
                  />
                  <path
                    d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"
                  />
                  <path
                    d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11"
                  />
                </svg>`
  } else {
    audio.muted = true
    volumeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#8B8B8B" class="bi bi-volume-mute" viewBox="0 0 16 16">
  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
</svg>`
  }
})

//Progress bar
const progressBar = document.getElementById('progressBar')
const updateProgressBar = function () {
  const currentTime = document.getElementById('current-time')
  currentTime.innerText
}
