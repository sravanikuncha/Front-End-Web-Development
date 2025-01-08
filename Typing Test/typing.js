
//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = 
`The quick brown fox jumps over the lazy dog. Sphinx of black quartz, judge my vow. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump!`
;

let timer=30;
let intervalId;

const sentenceEle=document.getElementById("sentence");
const startBtnEle=document.getElementById("start-btn");
const inputEle=document.getElementById("input");
const timerEle=document.getElementById("timer");
const resultEle=document.getElementById("result");
const speedEle=document.getElementById("speed");
const accuracyEle=document.getElementById("accuracy");
const retrybtnEle=document.getElementById("retry-btn");

retrybtnEle.addEventListener('click',()=>{
    resultEle.style.display="none";
    startBtnEle.disabled=false;
    inputEle.value='';
});

function showResult(){
    const enteredwords=inputEle.value.trim();
    const enteredwordsArr=enteredwords.split(" ");
    const sentencesArr=sentenceEle.textContent.trim().split(" ");
    
    console.log(enteredwordsArr);
    console.log(sentencesArr)

    let correctWords=0;
    enteredwordsArr.forEach((eachWord,index)=>{
        if(eachWord===sentencesArr[index]){
            correctWords++;
        }
    });
	
    console.log(correctWords);
    const accuracy=(correctWords/(sentencesArr.length))*100;
    const speed=(correctWords/30)*60;
    resultEle.style.display="block";
    speedEle.textContent=speed;
    accuracyEle.textContent=accuracy.toFixed(2);
    retrybtnEle.disabled=false;
    retrybtnEle.focus();
}

function endTest(){
    clearInterval(intervalId);

    startBtnEle.disabled=true;
    inputEle.disabled=true;
    
    showResult();
}


function updateTimer(){
   const currentTime=new Date();//this gets executed after 1 sec so starttiem and currenttime has a difference
   const elapsedTime=Math.floor((currentTime-startTime)/1000);
   const timeToShow=timer-elapsedTime;
//    console.log(timeToShow)
  const minutes=Math.floor(timeToShow/60);// here if ts 70sec so it will be 1 min
  const seconds=timeToShow%60;// here if its 78sec then 1 min +18sec . sec shoudl remian ini boundary 
  timerEle.textContent=`${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
}

function startTest(){
    sentenceEle.textContent=sentences;
    startBtnEle.disabled=true;

    inputEle.disabled=false;
    inputEle.value="";
    inputEle.focus();
    
    startTime=new Date();
    intervalId=setInterval(updateTimer,1000);
    setTimeout(()=>{endTest()},timer*1000);
}

startBtnEle.addEventListener("click",startTest);
