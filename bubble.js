let clutter = " ";
let score = 0;
let timer=60;
let hitrn;
function makeBubble(){
for(i=0;i<96;i++){
    let rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;

}
document.querySelector(".panelbtm").innerHTML = clutter;
}

function increaseScore(){
    score =score + 10;
    document.querySelector("#scoreVal").textContent = score;
}

function newHit(){
    hitrn = Math.floor(Math.random()*10);
    console.log(hitrn);
    console.log(typeof hitrn)
    document.querySelector("#hitval").innerText = hitrn;
}

function runTimer(){
    let timerint= setInterval(function() {
        if(timer>0){
            timer--;
            document.querySelector('#timerval').textContent= timer;
          }else{
            clearInterval(timerint);
            document.querySelector(".panelbtm").innerText="Game is Over!!";
          }
    },1000);
}

document.querySelector(".panelbtm").addEventListener("click",function(details){
    let clickednum = Number(details.target.textContent);
    console.log(clickednum)
    if(clickednum === hitrn){
        increaseScore();
        newHit();
    }
    else{
        newHit();
    
    }
    });

makeBubble();
newHit();
runTimer();