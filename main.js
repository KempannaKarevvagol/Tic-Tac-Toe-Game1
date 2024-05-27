let box = document.querySelectorAll(".boxs");
let Winnermsg = document.getElementById("hide");
const WinnerPatter = [
    [0,1,3],[3,4,5],[6,7,8],
    [2,1,0],[5,4,3],[8,7,6],
    [0,3,6],[1,4,7],[2,5,8],
    [6,3,0],[7,4,1],[8,5,2],
    [0,4,8],[2,4,6]
]
let turn = true;
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
        CheckWinner()
    })
});

function ShowWinner(winner){
    // Winnermsg.removeAttribute("id");
    // Winnermsg.classList.remove("hide")
    Winnermsg.style.display = "block";

}

function CheckWinner(){
    for(let Pattern of WinnerPatter){
        let Pos1 = box[Pattern[0]].innerText;
        let Pos2 = box[Pattern[1]].innerText;
        let Pos3 = box[Pattern[2]].innerText;

        if(Pos1 != "" && Pos2 != "" && Pos3 != ""){
            if(Pos1 === Pos2 && Pos2 === Pos3){
                 ShowWinner(Pos1)
            }
        }
    }
}