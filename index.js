const prova =function(){
   fetch(" https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
   .then((response)=>{
       if(response.ok){
           return response.json()
       }else{throw new Error ("errore nella risposta")}
   })
   .then((album)=>{
       console.log("prova",album)
       
       
   })
   .catch((error)=>{
       console.log("Orrore",error)
   })
}

prova()


//PRIMO ALBUM
const recuperoDati =function(){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/59854962")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{throw new Error ("errore nella risppsta")}
    })
    .then((album)=>{
        console.log("questo è l'album",album)
        const rowParent=document.getElementById("rowParent")
        const col=document.createElement("div")
        col.classList.add("col")
        col.innerHTML=`
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
    .catch((error)=>{
        console.log("Orrore",error)
    })
}

recuperoDati()

//SECONDO ALBUM
const recuperoDati2 =function(){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/936850")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{throw new Error ("errore nella risppsta")}
    })
    .then((album)=>{
        console.log("questo è l'album",album)
        const rowParent=document.getElementById("rowParent")
        const col=document.createElement("div")
        col.classList.add("col")
        col.innerHTML=`
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
    .catch((error)=>{
        console.log("Orrore",error)
    })
}

recuperoDati2()

//TERZO ALBUM
const recuperoDati3 =function(){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/124513442")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{throw new Error ("errore nella risppsta")}
    })
    .then((album)=>{
        console.log("questo è l'album",album)
        const rowParent=document.getElementById("rowParent")
        const col=document.createElement("div")
        col.classList.add("col")
        col.innerHTML=`
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
    .catch((error)=>{
        console.log("Orrore",error)
    })
}

recuperoDati3()

//QUARTO ALBUM
const recuperoDati4 =function(){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/5191431")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{throw new Error ("errore nella risppsta")}
    })
    .then((album)=>{
        console.log("questo è l'album",album)
        const rowParent=document.getElementById("rowParent")
        const col=document.createElement("div")
        col.classList.add("col")
        col.innerHTML=`
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
    .catch((error)=>{
        console.log("Orrore",error)
    })
}

recuperoDati4()

//QUINTO ALBUM
const recuperoDati5 =function(){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/115018")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{throw new Error ("errore nella risppsta")}
    })
    .then((album)=>{
        console.log("questo è l'album",album)
        const rowParent=document.getElementById("rowParent")
        const col=document.createElement("div")
        col.classList.add("col")
        col.innerHTML=`
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
    .catch((error)=>{
        console.log("Orrore",error)
    })
}

recuperoDati5()

//SESTO ALBUM
const recuperoDati6 =function(){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/629766")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{throw new Error ("errore nella risppsta")}
    })
    .then((album)=>{
        console.log("questo è l'album",album)
        const rowParent=document.getElementById("rowParent")
        const col=document.createElement("div")
        col.classList.add("col")
        col.innerHTML=`
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
    .catch((error)=>{
        console.log("Orrore",error)
    })
}

recuperoDati6()



