const BPMDisplay = document.getElementById("BPMDisplay");
const sound = new Audio();
var interval;
sound.src = "./assets/normalTick.mp3"

if(!localStorage.getItem("BPM")){
    localStorage.setItem("BPM", "90");
    location.reload();
}
var BPM = parseInt(localStorage.getItem("BPM"), 10);

BPMDisplay.innerHTML = "BPM "+ BPM;
startMetronome()

function ChangeBPM(amount){
    let check = BPM + amount;
    if(check > 0 && check <= 150){
        BPM += amount;
        localStorage.setItem("BPM", BPM);
        BPMDisplay.innerHTML = "BPM "+ BPM;
        updateMetronome()
    }else if(check <= 0){
        BPM = 1;
        localStorage.setItem("BPM", BPM);
        BPMDisplay.innerHTML = "BPM "+ BPM;
        updateMetronome()
    }else if(check >= 150){
        BPM = 150;
        localStorage.setItem("BPM", BPM);
        BPMDisplay.innerHTML = "BPM "+ BPM;
        updateMetronome()
    }
}
function updateMetronome(){
    clearInterval(interval);
    interval = setInterval(Tick, Math.floor(60000/BPM));
}
function startMetronome() {
    interval = setInterval(Tick, Math.floor(60000/BPM));
}

function Tick(){
    sound.play();
}