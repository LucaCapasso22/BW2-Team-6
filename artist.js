const addressBarContent = new URLSearchParams(window.location.search)
const artistId = addressBarContent.get('artistId')

const artistURL = `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`
fetch(artistURL)
  .then((response) => {
    if (response) {
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
    if (response) {
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
        <div class="row p-3">
            <div class="col col-lg-7 text-nowrap overflow-hidden">
                <span>1</span>
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
        </div>
    `

      songContainer.appendChild(newCol)
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
