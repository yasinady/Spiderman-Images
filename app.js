const cont = document.querySelector('.music-container');
const image = document.querySelector('#music-img');
const title = document.querySelector('#music-details .title');
const singer = document.querySelector('#music-details .singer');
const previus = document.querySelector('#controls #prev');
const playing = document.querySelector('#controls #play');
const next = document.querySelector('#controls #next');
const duration = document.querySelector('#duration')
const currentTime = document.querySelector('#current-time')
const progressBar = document.querySelector('#progress-bar')

const player = new MusicPlayer(musicList);


window.addEventListener('load', () => {
    let music = player.getMusic();
    displayMusic(music);
});

function displayMusic(music){
    title.innerText = music.getName() ;
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
}

playing.addEventListener('click', () => {
    const isMusicPlay = cont.classList.contains('playing');
    isMusicPlay ? pauseMusic() : playMusic();

})

prev.addEventListener('click', () => {
    prevMusic();
})

next.addEventListener('click', () => {
    nextMusic();
})

function prevMusic(){
    player.prev();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

function nextMusic(){
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

function pauseMusic() {
    cont.classList.remove('playing');
    playing.classList = 'fa-solid fa-play';
    audio.pause();
}



function playMusic() {
    cont.classList.add('playing');
    playing.classList = 'fa-solid fa-pause';
    audio.play();
}

const calculateTime = (allSeconds) => {
    const minute = Math.floor(allSeconds / 60);
    const second = Math.floor(allSeconds % 60);
    const main = second > 10 ? `0${second}`:`${second}`;
    const sonuc = `${minute}:${main}`;
    return sonuc;
    


}

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration)
})

