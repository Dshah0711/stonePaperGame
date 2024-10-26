let boxes =document.querySelectorAll(".box");
let msg =document.querySelector("#msg");
let score=0;
let computer =0;
const userscore=document.querySelector("#user-score");
let comscore=document.querySelector("#com_score");
let ans=["rock","paper","scissor"];
let scoreUp=()=>{
    score++;
       userscore.innerText=score;
}
let scoreDown=()=>{
    computer++;
    comscore.innerText=computer;
}

let draw=()=>{
       console.log("draw");
       msg.innerHTML="it's a draw";
    msg.style.backgroundColor="black";
          

}
let win=(user_input,com)=>{
    msg.innerHTML=`it's a win ! your ${user_input} defeats ${com}`;
    msg.style.backgroundColor="green";
    scoreUp();

}
let lost_game=(user_input,com)=>{
    msg.innerHTML=`you lost! your ${user_input}  is defeated by ${com} `;
    msg.style.backgroundColor="red";
    scoreDown();
}

let check=(user_input)=>{
    
    let random =Math.floor((Math.random()*3));
    console.log(ans[random]);
    if(user_input===ans[random]){
        draw();
    }
    else if(user_input==="rock" && ans[random]==="paper"||user_input==="paper" && ans[random]==="scissor"||user_input==="scissor" && ans[random]==="rock"){
        win(user_input,ans[random]);
    }
    else {
        lost_game(user_input,ans[random]);
    }
}
for(let box of boxes){
    box.addEventListener("click",()=>{
        console.log("clicked");
        console.log(box.id);
        
        check(box.id);
    })
}
