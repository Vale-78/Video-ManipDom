/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// const contenedorVideo = document.getElementById("videoContainer");

// appNode.addEventListener("click",playVideo)

//     window.alert("Hola!")
// function playVideo()
var reproductor = videojs("my-video",{
    fluid:true
})

var miVideo= document.getElementById("my-video");
function playPause(){
    if(miVideo.paused){
        miVideo.play();
    }else{
        miVideo.paused();
    }
}
function stop(){
    miVideo.paused();
    miVideo.currentTime = 0;
}

function skip(value){
    miVideo.currentTime += value;
}