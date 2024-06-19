let box = document.querySelectorAll(".boxs");
let Winnermsg = document.querySelector("#hide");
let valueO = document.getElementById("value-o");
let valueX = document.getElementById("value-x");


let rgame = document.getElementById("Rest");
let NewGameButton = document.getElementById("NewGame");

const WinnerPatter = [
    [0,1,3],[3,4,5],[6,7,8],
    [2,1,0],[5,4,3],[8,7,6],
    [0,3,6],[1,4,7],[2,5,8],
    [6,3,0],[7,4,1],[8,5,2],
    [0,4,8],[2,4,6]
]
let turn = true;
let scoreO = 0;
let scoreX = 0;


function RestGame(){
    for (const boxes of box) {
        boxes.disabled = false;
        boxes.innerText ="";
    }
}



box.forEach((boxs) =>  {
    boxs.addEventListener("click", () =>{
        if(turn){
            boxs.innerHTML = "O";
            turn = false;
        }
        else{
            boxs.innerHTML = "X";
            turn = true;
        }
        boxs.disabled = true;
        CheckWinner();
    })
});

function NewGame(){
    Winnermsg.classList.add("hide");
    RestGame();
}


function ShowWinner(winner){
     Winnermsg.classList.remove("hide");
  Winnermsg.innerText = `Congratulation, Winner is  ${winner}`;
    
    for (const boxs of box) {
        boxs.disabled = true;
    }
    if(winner == "O"){
        scoreO++;
        valueO.innerText = `${scoreO}`;
    }
    else{
        scoreX++;
        valueX.innerText = `${scoreX}`;
    }
    
}

function CheckWinner(){
    let isDraw = true;

    for (let Pattern of WinnerPatter) {
        let Pos1 = box[Pattern[0]].innerText;
        let Pos2 = box[Pattern[1]].innerText;
        let Pos3 = box[Pattern[2]].innerText;

        if (Pos1 !== "" && Pos1 === Pos2 && Pos2 === Pos3) {
            ShowWinner(Pos1);
            return;
        }

        if (Pos1 === "" || Pos2 === "" || Pos3 === "") {
            isDraw = false;
        }
    }

    if (isDraw) {
        Winnermsg.classList.remove("hide");
        Winnermsg.innerText = "It's a Draw!";
    }
}


rgame.addEventListener("click", RestGame);
NewGameButton.addEventListener("click", NewGame);