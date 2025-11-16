let PlayBtn = document.querySelector("#play").
addEventListener('click', newPlay);

let current = {
    Rank: ["Rank: Bronze","Rank: Silver","Rank: Gold","Rank: Diamond","Rank: Master","Rank: GrandMaster"],
    queue:[0,10,5,30,65,215],
    spot:0,
    Player2:["Player2","Invite"],
    Player3:["Player3","Invite"],
    Player4:["Player4","Invite"],
    Time:0,
}


function displayPlay() {
    const RankText = document.querySelector('#blank1');
    const queueText = document.querySelector('#blank2');
    RankText.textContent = current.Rank[Math.floor(Math.random() * 6)];
    queueText.textContent = "";

    if((current.Player2[Math.floor(Math.random() * 2)]=="Invite"&current.Player3[Math.floor(Math.random() * 2)]=="Player3"&&current.Player4[Math.floor(Math.random() * 2)]=="Invite")
    ||(current.Player2[Math.floor(Math.random() * 2)]=="Invite"&current.Player3[Math.floor(Math.random() * 2)]=="Invite"&&current.Player4[Math.floor(Math.random() * 2)]=="Player4")
    || current.Player2[Math.floor(Math.random() * 2)]=="Player2"&current.Player3[Math.floor(Math.random() * 2)]=="Invite"&&current.Player4[Math.floor(Math.random() * 2)]=="Invite"){
    document.getElementById('player2').textContent = "Player2";
    document.getElementById('player3').textContent = "Invite";
    document.getElementById('player4').textContent ="Invite";
    }
    else if((current.Player2[Math.floor(Math.random() * 2)]=="Invite"&current.Player3[Math.floor(Math.random() * 2)]=="Player3"&&current.Player4[Math.floor(Math.random() * 2)]=="Player4")
    ||(current.Player2[Math.floor(Math.random() * 2)]=="Player2"&current.Player3[Math.floor(Math.random() * 2)]=="Invite"&&current.Player4[Math.floor(Math.random() * 2)]=="Player4")
    || current.Player2[Math.floor(Math.random() * 2)]=="Player2"&current.Player3[Math.floor(Math.random() * 2)]=="Player3"&&current.Player4[Math.floor(Math.random() * 2)]=="Invite"){
    document.getElementById('player2').textContent = "Player2";
    document.getElementById('player3').textContent = "Player3";
    document.getElementById('player4').textContent ="Invite";
    }
      else if(current.Player2[Math.floor(Math.random() * 2)]=="Invite"&current.Player3[Math.floor(Math.random() * 2)]=="Invite"&&current.Player4[Math.floor(Math.random() * 2)]=="Invite"){
    document.getElementById('player2').textContent = "Invite";
    document.getElementById('player3').textContent = "Invite";
    document.getElementById('player4').textContent ="Invite";
    }
    

}


async function delay(ms) {
    minute = 0;
    if(current.spot==0){
  return new Promise(resolve => setTimeout(resolve, ms));
    }else{
    for (let i = 1; i <= current.spot; i=1) {
        current.spot = current.spot-i;
        current.Time = current.Time+i
        console.log(current.spot);
        if(current.spot%(Math.floor(Math.random() * 6))==0){
        document.getElementById('blank2').textContent = "Queue:" +current.spot;
        }
        if(current.Time<10){
        document.getElementById('blank3').textContent = "0:0"+ current.Time;
        }else if(current.Time>=10&&current.Time<60){
            document.getElementById('blank3').textContent = "0:"+ current.Time;
        }else if(current.Time>=60){
            
            if(current.Time%60==0){
                minute=minute+1;
            }
            if(current.Time%60<10){
        document.getElementById('blank3').textContent = minute +":0"+ current.Time%60;
        }else if(current.Time%60>=10&&current.Time%60<60){
            document.getElementById('blank3').textContent =  minute +":"+ current.Time%60;
        }
        }
        await delay2(1000);
      }
      return new Promise(resolve => setTimeout(resolve, ms));
    }
}

function delay2(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function newPlay(){
    // console.log("Success == answer!");
    //const answerText = document.querySelector('#blank2');
    //answerText.textContent = current.answer;
    //alert('wow');
    console.log('rank');
    console.log(current.answer);
    document.getElementById('loader').style.display = "block";
    document.getElementById('play').textContent = "Loading";
    spot = current.queue[Math.floor(Math.random() * 6)]
    document.getElementById('blank2').textContent = "queue: " + spot;
    current.spot= spot;
    console.log(current.spot);
    await delay(2000);

    document.getElementById('loader').style.display = "none";
    document.getElementById('play').textContent = "Match Starting!";

    await delay(2000);
    document.getElementById('main').style.display = "none";
    await delay(1000);
    location.reload();
}


displayPlay();
