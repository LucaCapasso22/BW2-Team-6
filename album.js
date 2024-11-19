const recuperoDati =function(){
    fetch(" https://striveschool-api.herokuapp.com/api/deezer/album/6378419")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{throw new Error ("errore nella risppsta")}
    })
    .then((album)=>{
        console.log("questo è l'album",album)
    })
    .catch((error)=>{
        console.log("Orrore",error)
    })
}

recuperoDati()

const addressBarContent=new URLSearchParams(window.location.search)
addressBarContent.get("albumId");

fetch( "https://striveschool-api.herokuapp.com/api/deezer/album/6378419")
.then((response)=>{
    if(response.ok){
        return response.json()
    }else{ throw new Error("errore nella risposta")}
})
.then((album)=>{
    const row=document.getElementById("rowParent")
album.tracks.data.forEach((song)=>{
    console.log(song)
    const songRow = document.createElement("div");
      songRow.classList.add("row")
   songRow.innerHTML=`
            
            <div class="col col-6">${song.title}<br> <span class="small" > ${song.artist.name}</span></div>
            <div class="col col-3 d-flex justify-content-around align-items-center">694.578</div>
            <div class="col col-3 d-flex justify-content-around align-items-center">1:28</div>
          `
          row.appendChild(songRow)
})
})
.catch((error)=>{
    console.log("orrore", error)

})
