let Gtimer =  document.querySelector(".Gtimer")
let Ghit =  document.querySelector(".Ghit")
let Gscore =  document.querySelector(".Gscore")
let setScore = 0;
let Gpenal = document.querySelector(".gpanelbody")
let hitNub;
let audio = document.querySelector('.clickaudio')
let audio1 = document.querySelector('.clickaudio1')
let audio2 = document.querySelector('.clickaudio2')

function clickAudio(){
    audio.play()
}
function clickAudio1(){
    audio1.play()
}
function clickAudio2(){
    audio2.play()
}

function scoreMaker(){
setScore += 10
Gscore.textContent = setScore;
}
function hitMaker(){
    hitNub = Math.floor(Math.random()*10)
    Ghit.textContent = hitNub
}

function timerMaker(){
    let timer = 60;
   let timercler =  setInterval(function timerReducer(){
        if (timer > 0){
            timer--
            Gtimer.textContent = timer
        }
        else{
            clearInterval(timercler)
            Gpenal.innerHTML = `<div class="GameOverBox"><h1 class="overtext">Game Over...</h1> <button class="startbtn">Play Again</button></div>`;
            clickAudio2()
        }
    },1000)
}
function bubbleMaker(){
    let clutter = "";
for(var i = 0; i <=197; i++){

    let randomNub = Math.floor(Math.random() * 10)

    clutter += `<div key=${randomNub} class="gbubble">${randomNub}</div>`
}

document.querySelector(".gpanelbody").innerHTML = clutter
}

Gpenal.addEventListener("click",function(bubble){
    clickNu = Number(bubble.target.textContent)
    if(clickNu === hitNub){
        scoreMaker()
        bubbleMaker()
        hitMaker()
        clickAudio()
    }
    else{
        clickAudio2()
    }
    if(bubble.target.textContent === "Play Again"){
        timerMaker()
        bubbleMaker()
        hitMaker()        
        clickAudio1()
    }
})





timerMaker()
bubbleMaker()
hitMaker()


