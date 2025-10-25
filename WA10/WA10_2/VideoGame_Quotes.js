

let triviaBtn = document.querySelector("#js-new-quote").
addEventListener('click', newTrivia);

let asnwerBtn = document.querySelector('#js-tweet').
addEventListener('click',newAnswer);

let wrongBtn = document.querySelector("#js-wrong").
addEventListener('click',newWrong);

let multiple1Btn = document.querySelector("#js-multiple-text1")
.addEventListener('click',newMultiple1);

let multiple2Btn =document.querySelector("#js-multiple-text2")
.addEventListener('click',newMultiple2);

let multiple3Btn = document.querySelector("#js-multiple-text3")
.addEventListener('click',newMultiple3);

let multiple4Btn = document.querySelector("#js-multiple-text4")
.addEventListener('click',newMultiple4);

let current = {
    question: "",
    answer: "",
    wrong: ["","",""],
    multiple:["","","",""],
    correct: 0,
    wrong: 0
}

/*setTimeout(function(){
    console.log("Blah");
},10000);*/

const endpoint = "https://opentdb.com/api.php?amount=1&category=15&type=multiple";


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function newTrivia(){
    //console.log("Success");
    document.getElementById('loader').style.display = "block";
   await delay(2000);
    try {
        const response = await fetch(endpoint);
    
        if (!response.ok){
            throw Error(response.statusText);
        }
        
        const json =  await response.json();
        console.log(json);
        //console.log(json['results'][0]['question']);
        //displayTrivia(json['results'][0]['question'],current.multiple);
        current.question = json['results'][0]['question'];
        current.answer = json['results'][0]['correct_answer'];
        current.wrong[0] = json['results'][0]['incorrect_answers'][0];
        current.wrong[1] = json['results'][0]['incorrect_answers'][1];
        current.wrong[2] = json['results'][0]['incorrect_answers'][2];


        current.multiple[0] = json['results'][0]['incorrect_answers'][0];
        current.multiple[1] = json['results'][0]['incorrect_answers'][1];
        current.multiple[2] = json['results'][0]['incorrect_answers'][2];
        current.multiple[3] = json['results'][0]['correct_answer'];

         displayTrivia(json['results'][0]['question'],current.multiple);

        console.log(current.question);
        console.log(current.answer);
    }catch (err){
        console.log(err);
        alert('Failed to get new trivia');
    }
    
     document.getElementById('js-multiple-text1').style.backgroundColor = "white";
     document.getElementById('js-multiple-text2').style.backgroundColor = "white";
     document.getElementById('js-multiple-text3').style.backgroundColor = "white";
     document.getElementById('js-multiple-text4').style.backgroundColor = "white";

     document.getElementById('loader').style.display = "none";
}


function displayTrivia(question, multiple) {
    const questionText = document.querySelector('#js-quote-text');
    const answerText = document.querySelector('#js-answer-text');
    const wrongText =  document.querySelector('#js-wrong-text');
    const multipleText =  
    [document.querySelector('#js-multiple-text1'), 
        document.querySelector('#js-multiple-text2'), 
        document.querySelector('#js-multiple-text3'),
        document.querySelector('#js-multiple-text4')];

    questionText.textContent = question;
    multipleText[0].textContent = multiple[0];
    multipleText[1].textContent = multiple[1];
    multipleText[2].textContent = multiple[2];
    multipleText[3].textContent = multiple[3];
    
    answerText.textContent = "";
    wrongText.textContent = "";

    const correctText = document.querySelector("#myElement");
    const failText = document.querySelector("#myElement2");
    correctText.textContent = current.correct;
    failText.textContent =current.wrong;
}


function newAnswer(){
    // console.log("Success == answer!");
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = current.answer;
}

function newWrong(){
const wrongText = document.querySelector('#js-wrong-text');
wrongText.textContent = current.wrong;
 
}

function newMultiple1(){
    //const multipleText = 
    /*[document.querySelector('#js-multiple-text1'),
        document.querySelector('#js-multiple-text2'),
        document.querySelector('#js-multiple-text3'),
        document.querySelector('#js-multiple-text4')
    ];*/
    //multipleText.textContent = current.multiple;
     
     //console.log("Answer");
      if(current.multiple[0]==current.answer){
        console.log("Correct!");
        alert("Correct!");
        document.getElementById('js-multiple-text1').style.backgroundColor = "green";
        current.correct++;
        const correctText = document.querySelector("#myElement");
        correctText.textContent = current.correct;
    }else{
        console.log("Wrong!");
        document.getElementById('js-multiple-text1').style.backgroundColor = "red";
        alert("Wrong!");
        current.wrong++;
        const failText = document.querySelector("#myElement2");
        failText.textContent =current.wrong;
    }
}

function newMultiple2(){
if(current.multiple[1]==current.answer){
        console.log("Correct!");
        document.getElementById('js-multiple-text2').style.backgroundColor = "green";
        alert("Correct!");
        current.correct++;
        const correctText = document.querySelector("#myElement");
        correctText.textContent = current.correct;
    }else{
        console.log("Wrong!");
        document.getElementById('js-multiple-text2').style.backgroundColor = "red";
        alert("Wrong!");
        current.wrong++;
        const failText = document.querySelector("#myElement2");
        failText.textContent =current.wrong;
    }
}

function newMultiple3(){
    if(current.multiple[2]==current.answer){
        console.log("Correct!");
        document.getElementById('js-multiple-text3').style.backgroundColor = "green";
        alert("Correct!");
        current.correct++;
        const correctText = document.querySelector("#myElement");
        correctText.textContent = current.correct;
    }else{
        console.log("Wrong!");
        document.getElementById('js-multiple-text3').style.backgroundColor = "red";
        alert("Wrong!");
        current.wrong++;
        const failText = document.querySelector("#myElement2");
        failText.textContent =current.wrong;
    }
}

function newMultiple4(){
    if(current.multiple[3]==current.answer){
        console.log("Correct!");
        document.getElementById('js-multiple-text4').style.backgroundColor = "green";
        alert("Correct!");
        current.correct++;
        const correctText = document.querySelector("#myElement");
        correctText.textContent = current.correct;
    }else{
        console.log("Wrong!");
        document.getElementById('js-multiple-text4').style.backgroundColor = "red";
        alert("Wrong!");
        current.wrong++;
        const failText = document.querySelector("#myElement2");
        failText.textContent =current.wrong;
    }
}


newTrivia();