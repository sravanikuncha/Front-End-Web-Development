const questionObjects = [
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      answers: ['Two', 'Three', 'Four', 'Five'],
      question:
        " Q 1/5 How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'seven',
      answers: ['six', 'seven', 'Four', 'Five'],
      question:
        " Q 2/5 How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Four',
      answers: ['Two', 'Three', 'Four',],
      question:
        " Q 3/5 How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Five',
      answers: ['Two', 'Three',  'Five'],
      question:
        " Q 4/5 How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'ten',
      answers: ['Two', 'ten', 'Four', ],
      question:
        " Q 5/5 How many pieces of bun are in a Mcdonald's Big Mac?",
    }
  ]
    
//destructuring 



let score=0;
let questionObjCounter=0;


const nextEle=document.getElementById("next");
nextEle.textContent="Next";




function QuizStart(questionObjCounter){
  
  const {correctAnswer,answers,question}=questionObjects[questionObjCounter];

  const questionEle=document.getElementById("question");
  questionEle.textContent=question;

  const optionsEle=document.getElementById("options");
  function addOptions(eachAnswer){
    const answerButton=document.createElement("button");
    answerButton.textContent=eachAnswer;
    optionsEle.append(answerButton);

    answerButton.addEventListener("click",()=>{
      if(eachAnswer==correctAnswer){
        score+=1;
      }
      else{
        score-=0.25;
      }
      const scoreEle=document.querySelector("#score");
      scoreEle.textContent=`Score : ${score}/${questionObjects.length}`;

      questionObjCounter++;
      if(questionObjCounter<questionObjects.length){
        QuizStart(questionObjCounter);
      }
      else{
        questionEle.textContent="Quiz Completed";
        optionsEle.textContent="";
      }
    });
  }
  optionsEle.textContent="";
  answers.forEach(addOptions);
}

QuizStart(questionObjCounter);