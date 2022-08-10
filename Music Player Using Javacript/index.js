const music=document.querySelector("audio");
const img=document.querySelector("img");
const play=document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");

const songs =[{
    name :"11",
    image :"image2",
    artist :'Sidhu Moosewala',
    title:"Dawood"

},

{
    name:"12",
    image:"image3",
    artist :"Sidhu Moosewala",
    title:"Levels"
},

{
    name:"14",
    image: "image5",
    artist :"Sidhu Moosewala",
    title : "SYL",
},

{
    name:"15",
    image:  "image4" ,
    artist : "Sidhu Moosewala",
    title : "The Last ride",
},
{

    name :"10",
    image:  "image1" ,
    artist : "Sidhu Moosewala",
    title : "295"
}

]

let isPlaying

//For playing

const playMusic=()=>{
    isPlaying=true;
    music.play();
    play.classList.replace('fa-play','fa-pause')
}

// for pause

const pauseMusic=()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play')
}

play.addEventListener('click', ()=>
{
    isPlaying ? pauseMusic():playMusic();

})

const loadSong=(songs)=>
{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="songs/"+songs.name+".mp3";
    img.src="images/"+songs.image+".jpg";
};
    
songIndex=0;
const nextSong=()=>{
    songIndex=(songIndex+1)% songs.length;
    loadSong(songs[songIndex])
    playMusic();
};
    
const prevSong=()=>{
    songIndex=(songIndex-1 + songs.length)% songs.length;
    loadSong(songs[songIndex])
    playMusic();
}
    next.addEventListener("click",nextSong);
    prev.addEventListener("click",prevSong);

