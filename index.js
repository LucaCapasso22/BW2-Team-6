//const prova = function () {
//  fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
//    .then((response) => {
//      if (response.ok) {
//        return response.json()
//      } else {
//        throw new Error('errore nella risposta')
//      }
//    })
//    .then((album) => {
//      console.log('prova', album)
//    })
//    .catch((error) => {
//      console.log('Orrore', error)
//    })
//}
//
//prova()

const generateSong = function () {}

//PRIMO ALBUM
const recuperoDati = function () {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/album/59854962')
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('errore nella risposta')
      }
    })
    .then((album) => {
      const rowParent = document.getElementById('rowParent')
      const col = document.createElement('div')
      col.classList.add('col')
      col.innerHTML = `
                      <a id="album1" href="./album.html?albumId=${album.id}"
                        class="rounded d-flex align-items-center h-70 bg-testo text-decoration-none"
                      >
                        <img
                          src="${album.cover}"
                          class="w-25 me-2 rounded-start"
                          alt=""
                        />
                        <div>
                          <p class="text-light fw-semibold mb-0">${album.title}</p>
                        </div>
                      </a>`

      rowParent.appendChild(col)
    })
    .catch((error) => {
      console.log('Orrore', error)
    })
}

recuperoDati()

//SECONDO ALBUM
const recuperoDati2 = function () {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/album/936850')
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('errore nella risposta')
      }
    })
    .then((album) => {
      const rowParent = document.getElementById('rowParent')
      const col = document.createElement('div')
      col.classList.add('col')
      col.innerHTML = `
                      <a id="album2" href="./album.html?albumId=${album.id}"
                        class="rounded d-flex align-items-center h-70 bg-testo text-decoration-none"
                      >
                        <img
                          src="${album.cover}"
                          class="w-25 me-2 rounded-start"
                          alt=""
                        />
                        <div>
                          <p class="text-light fw-semibold mb-0">${album.title}</p>
                        </div>
                      </a>`

      rowParent.appendChild(col)
    })
    .catch((error) => {
      console.log('Orrore', error)
    })
}

recuperoDati2()

//TERZO ALBUM
const recuperoDati3 = function () {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/album/124513442')
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('errore nella risposta')
      }
    })
    .then((album) => {
      const rowParent = document.getElementById('rowParent')
      const col = document.createElement('div')
      col.classList.add('col')
      col.innerHTML = `
                      <a id="album3" href="./album.html?albumId=${album.id}"
                        class="rounded d-flex align-items-center h-70 bg-testo text-decoration-none"
                      >
                        <img
                          src="${album.cover}"
                          class="w-25 me-2 rounded-start"
                          alt=""
                        />
                        <div>
                          <p class="text-light fw-semibold mb-0">${album.title}</p>
                        </div>
                      </a>`

      rowParent.appendChild(col)
    })
    .catch((error) => {
      console.log('Orrore', error)
    })
}

recuperoDati3()

//QUARTO ALBUM
const recuperoDati4 = function () {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/album/5191431')
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('errore nella risposta')
      }
    })
    .then((album) => {
      const rowParent = document.getElementById('rowParent')
      const col = document.createElement('div')
      col.classList.add('col')
      col.innerHTML = `
                      <a id="album4" href="./album.html?albumId=${album.id}"
                        class="rounded d-flex align-items-center h-70 bg-testo text-decoration-none"
                      >
                        <img
                          src="${album.cover}"
                          class="w-25 me-2 rounded-start"
                          alt=""
                        />
                        <div>
                          <p class="text-light fw-semibold mb-0">${album.title}</p>
                        </div>
                      </a>`

      rowParent.appendChild(col)
    })
    .catch((error) => {
      console.log('Orrore', error)
    })
}

recuperoDati4()

//QUINTO ALBUM
const recuperoDati5 = function () {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/album/115018')
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('errore nella risposta')
      }
    })
    .then((album) => {
      const rowParent = document.getElementById('rowParent')
      const col = document.createElement('div')
      col.classList.add('col')
      col.innerHTML = `
                      <a id="album5" href="./album.html?albumId=${album.id}"
                        class="rounded d-flex align-items-center h-70 bg-testo text-decoration-none"
                      >
                        <img
                          src="${album.cover}"
                          class="w-25 me-2 rounded-start"
                          alt=""
                        />
                        <div>
                          <p class="text-light fw-semibold mb-0">${album.title}</p>
                        </div>
                      </a>`

      rowParent.appendChild(col)
    })
    .catch((error) => {
      console.log('Orrore', error)
    })
}

recuperoDati5()

//SESTO ALBUM
const recuperoDati6 = function () {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/album/629766')
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('errore nella risposta')
      }
    })
    .then((album) => {
      const rowParent = document.getElementById('rowParent')
      const col = document.createElement('div')
      col.classList.add('col')
      col.innerHTML = `
                        <a id="album6" href="./album.html?albumId=${album.id}"
                          class="rounded d-flex align-items-center h-70 bg-testo text-decoration-none"
                        >
                        <img
                          src="${album.cover}"
                          class="w-25 me-2 rounded-start"
                          alt=""
                        />
                        <div>
                          <p class="text-light fw-semibold mb-0">${album.title}</p>
                        </div>
                      </a>`

      rowParent.appendChild(col)
    })
    .catch((error) => {
      console.log('Orrore', error)
    })
}

recuperoDati6()

// CAROSSELLO IN HOMEPAGE
const apiUrl = 'https://striveschool-api.herokuapp.com/api/deezer/album/936850'
// const addressBarContent = new URLSearchParams(window.location.search)
// let albumId = addressBarContent.get('albumId')
const carouselFunction = function () {
  fetch(apiUrl)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Errore nel recupero dei dati')
      }
    })
    .then((album) => {
      console.log('Trovato album', album)
      const carouselInner = document.getElementById('carouselInner')
      for (let i = 0; i < album.tracks.data.length; i++) {
        const row = document.createElement('div')
        row.classList.add('row', 'carousel-item', 'w-100')
        if (i === 0) {
          row.classList.add('active')
        }
        row.innerHTML = `
        <div class="d-flex">
       <img
          class="w-25 p-lg-3 object-fit-cover"
          src= ${album.cover}
          alt="albumCover"
        />
        <div class="col text-white mb-3">
          <h6 class="mt-2">ALBUM</h6>
          <div class="mt-5">
            <h1 class="fs-1">${album.tracks.data[i].title}</h1>
            <p class="fs-6">${album.tracks.data[i].artist.name}</p>
            <p class="fs-6">
              Ascolta il nuovo album di ${album.artist.name}
            </p>
          </div>
      <a id="album6" href="./album.html?albumId=${album.id}"
                        class="text-decoration-none rounded-pill btn btn-success px-3 fw-semibold"
                      >Play
              </a>
           
            <button
              class="rounded-pill border btn border-white mx-3 bg-transparent text-white px-3 fw-semibold"
            >
              Salva
            </button>
            <i class="fas fa-ellipsis-h text-white-50  "></i>
          </span>
        </div></div>`
        carouselInner.appendChild(row)
      }
      //   <div class="carousel-item active">
      //   <img src="./assets/imgs/main/image-14.jpg" class="d-block w-100" alt="...">
      // </div>
    })
    .catch((error) => {
      console.log('ERRORE', error)
    })
}

carouselFunction()
