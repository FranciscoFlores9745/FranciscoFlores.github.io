let triviaBtn = document.querySelector("#js-new-quote").
addEventListener('click', newTrivia);

let asnwerBtn = document.querySelector('#js-tweet').
addEventListener('click',newAnswer);

let wrongBtn = document.querySelector("#js-wrong").
addEventListener('click',newWrong);

let multipleBtn =  
[document.querySelector("#js-multiple-text1"),
 document.querySelector("#js-multiple-text2"),
 document.querySelector("#js-multiple-text3"),
 document.querySelector("#js-multiple-text4")
];
addEventListener('click',newMultiple);

let current = {
    question: "",
    answer: "",
    wrong: ["","",""],
    multiple:["","","",""]
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

function newMultiple(){
    //const multipleText = 
    /*[document.querySelector('#js-multiple-text1'),
        document.querySelector('#js-multiple-text2'),
        document.querySelector('#js-multiple-text3'),
        document.querySelector('#js-multiple-text4')
    ];*/
    //multipleText.textContent = current.multiple;
     multiple = "";
    i=0;
    for(multiple ; multipleBtn[i];i++){
        multiple = multipleBtn[i];
        console.log("Loop");
        //console.log(multipleBtn);
        console.log(multiple.textContent);
    if(multiple.textContent==current.answer){
       console.log("Correct");
    }else{
        console.log("Wrong!");
    }
    }
}



newTrivia();