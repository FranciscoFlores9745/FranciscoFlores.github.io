let triviaBtn = document.querySelector("#js-new-quote").
addEventListener('click', newTrivia);

let asnwerBtn = document.querySelector('#js-tweet').
addEventListener('click',newAnswer);

let wrongBtn = document.querySelector("#js-wrong").
addEventListener('click',newWrong);

let current = {
    question: "",
    answer: "",
    wrong: ["","",""],
}
function newWrong(){
const answerText = document.querySelector('#js-wrong-text');
answerText.textContent = current.wrong;
 
}
setTimeout(function(){
    console.log("Blah");
},10000);

const endpoint = "https://opentdb.com/api.php?amount=1&category=15&type=multiple";

async function newTrivia(){
    //console.log("Success");

    try {
        const response = await fetch(endpoint);
    
        if (!response.ok){
            throw Error(response.statusText);
        }
        
        const json =  await response.json();
        console.log(json);
        //console.log(json['results'][0]['question']);
        displayTrivia(json['results'][0]['question']);
        current.question = json['results'][0]['question'];
        current.answer = json['results'][0]['correct_answer'];
        current.wrong[0] = json['results'][0]['incorrect_answers'][0];
        current.wrong[1] = json['results'][0]['incorrect_answers'][1];
        current.wrong[2] = json['results'][0]['incorrect_answers'][2];
        console.log(current.question);
        console.log(current.answer);
    }catch (err){
        console.log(err);
        alert('Failed to get new trivia');
    }
}

function displayTrivia(question) {
    const questionText = document.querySelector('#js-quote-text');
    const answerText = document.querySelector('#js-answer-text');
    questionText.textContent = question;
    answerText.textContent = "";
}


function newAnswer(){
    // console.log("Success == answer!");
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = current.answer;
}



newTrivia();