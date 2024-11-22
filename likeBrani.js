let savedSong = localStorage.getItem("savedSong");
if (savedSong === null  || JSON.parse(savedSong).length === 0) {
  const nessunBrano = document.getElementById("nessunBrano");
  nessunBrano.innerHTML = `<h6 class="text-light"> Nessun brano salvato</h6>`;
} else {
  savedSong = JSON.parse(savedSong);

  savedSong.forEach((song) => {
    const songRow=document.createElement("div")
    songRow.classList.add("row")
    songRow.innerHTML = `<div class="col col-9 text-light"><a> <i class="fas fa-heart me-2 ${
      savedSong.some((s) => s.title === song.title) ? "text-success" : ""
    } "
            title-song-id="${song.title}"
             name-artist-id="${song.artist.name}" 
             artist-id="${song.artist.id}">
             </i>
        </a> 
        <span>${song.title}</span>
        </div>
        <div class=" col col-3">
         <a href="./artist.html?artistId=${
           song.artist.id
         }" class="small text-decoration-none text-light " > ${song.artist}</a>
         </div>
         <hr class="text-light mt-3">
            
            `;
            nessunBrano.appendChild(songRow)
  });
}

const cuore = document.querySelectorAll(
    ".fa-heart:not(.fa-heart.like-icon)"
  );
  cuore.forEach((icon) => {
   
    icon.addEventListener("click", () => {
      const title=icon.getAttribute("title-song-id")
      
     const name=icon.getAttribute("name-artist-id")
      const artistId=icon.getAttribute("artist-id")
      icon.classList.toggle("text-success");
      let savedSong=localStorage.getItem("savedSong")
      if(savedSong===null){
        savedSong=[]
      }else{savedSong=JSON.parse(savedSong)}
      const song={
        title:title,
        artist:name,
        artistId:artistId}
       
          if(!savedSong.some((songItem)=>songItem.title===song.title)){
            savedSong.push(song)
          }else{savedSong=savedSong.filter((songItem)=>songItem.title !==song.title)}
          console.log("savedSong",savedSong)
          localStorage.setItem("savedSong",JSON.stringify(savedSong))
          location.reload()
        
    });
  });
