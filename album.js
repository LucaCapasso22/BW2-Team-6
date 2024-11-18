const recuperoDati =function(){
    fetch(" https://striveschool-api.herokuapp.com/api/deezer/album/75621062")
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{throw new Error ("errore nella risppsta")}
    })
    .then((musics)=>{
        console.log(musics)
    })
    .catch((error)=>{
        console.log("Orrore",error)
    })
}

recuperoDati()