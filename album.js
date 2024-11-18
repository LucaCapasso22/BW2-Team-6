const album =function(){
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/6378419`)
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{throw new Error ("errore nella risppsta")}
    })
    .then((album)=>{

        console.log(album)
    })
    .catch((error)=>{
        console.log("Orrore",error)
    })
}

album()
