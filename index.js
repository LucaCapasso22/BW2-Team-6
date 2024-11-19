const recuperoDati =function(){
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/1121182")
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
                      <div
                        class="rounded d-flex align-items-center h-70 bg-testo"
                      >
                        <img
                          src="${album.cover}"
                          class="w-25 me-2 rounded-start"
                          alt=""
                        />
                        <div>
                          <p class="text-light fw-semibold mb-0">${album.title}</p>
                        </div>
                      </div>
                    `
                    rowParent.appendChild(col)
    })
    .catch((error)=>{
        console.log("Orrore",error)
    })
}

recuperoDati()
