let userscore = 0;
let compscore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

choice.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener('click',()=>{
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    })
})


const playgame = (userchoice)=>{
    console.log("user choice = ", userchoice);
    // Generate Computer Choice
    const compchoice = gencompchoice();
    console.log("comp choice = ", compchoice);
    if(userchoice === compchoice){
        drawGame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            compchoice === "scissors" ? false : true;
        }else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

const gencompchoice = () =>{
    // rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const Idx = Math.floor(Math.random() * 3);
    return options[Idx];

}

const drawGame = () =>{
    console.log("game was draw.");
     msg.innerText = "Game Draw. Play Again."
     msg.style.backgroundColor = "blue";
}

const showwinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win");
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose");
        msg.innerText = `You lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}