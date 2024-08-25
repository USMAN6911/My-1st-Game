let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userscorepara  = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")

choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playgame(userchoice)
    });
});




    const gencompchoice = () => {
        const options = ["rock" ,"paper", "scissors"]
      const rnadidx =  Math.floor(Math.random() * 3);
      return options[rnadidx]
    } 

    const DrawGame = () => {
        // console.log("Game was Draw.")
        msg.innerText = "Game was Draw. play Again!";
        msg.style.backgroundColor = "#081b31";
    }

    const showWinner = (userwin, userchoice, compchoice) => {
         if(userwin) {
            userscore++;
            userscorepara.innerText = userscore;
            msg.innerText = `You Win! ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor = "green"
             
         }  else {
              compscore++;
              compscorepara.innerText = compscore;
            msg.innerText = `You lose! ${compchoice} beats ${userchoice}`;
            msg.style.backgroundColor = "red"
         }
    }




const playgame = (userchoice) => {
    // console.log("user choice =", userchoice);
    // generate computer choice
    const compchoice = gencompchoice();
    // console.log("comp choice =", compchoice);

    if(userchoice === compchoice) {
        // Draw Game
        DrawGame();
    } else {
        let userwin = true;
        if(userchoice === "rock") {
            // scissors, paper
            userwin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper") {
            // rock, scissors
            userwin = compchoice === "scissors" ? false : true;
        } else if(userchoice === "scissors") {
            // rock, paper
            userwin = compchoice === "rock" ? false : true;
        }
        
        showWinner(userwin ,userchoice,compchoice);
    }
};

// const showWinner = (userwin) => {
//     if(userwin) {
//         console.log("User wins!");
//     } else {
//         console.log("Computer wins!");
//     }
// };




