// let paneltop= document.getElementById("paneltop");
// let panelbottom= document.getElementById("panelbuttom");
// let hit= document.getElementById("hit");
// let score= document.getElementById("score");
// let timer= document.getElementById("timer");
 let  hit= 0;
 let timer=60;
 let score= 0;

function newBubble() {
    
    let bubbleBox = '';
    let usedNumbers = new Set();
    
    for (let i = 1; i <= 100; i++) {
        let number;
        do {
            number = Math.floor(Math.random() * 100) + 1;
        } while (usedNumbers.has(number));
        
        usedNumbers.add(number);
        bubbleBox += `<div class="circle">${number}</div>`;
    }

    document.querySelector("#panelbuttom").innerHTML = bubbleBox;
};

function timerDecrease(){
     const time= setInterval(()=>{
        timer--;
        document.getElementById("timer").innerHTML= timer;
    if(timer<=0){
        clearInterval(time);
        alert(`your scored : ${score}`);
      window(refresh);
    }
    },1000);
 }
 function hitNumber(){
    hit= Math.ceil(Math.random()*11);
document.getElementById("hit").innerHTML= hit;

 }
 function totalScore(){
    score+=5;
document.getElementById("score").innerHTML= score
 }

function clickCircle(){
document.getElementById("panelbuttom").addEventListener("click",function(event){
  let click= Number(event.target.textContent);
  if(click==hit){
    hitNumber();
    newBubble();
    totalScore();
  }
}
);  
} 

newBubble();
timerDecrease();
hitNumber();
clickCircle();






