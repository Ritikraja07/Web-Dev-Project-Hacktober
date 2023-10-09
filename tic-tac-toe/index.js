const t1=performance.now();
const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newGameBtn=document.querySelector(".btn");

let Gamegrid;
let currentPlayer;
const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function Game(){
    Gamegrid=["","","","","","","","",""];
    currentPlayer="X";
    newGameBtn.classList.remove("active");
    gameInfo.innerText=`Current Player- ${currentPlayer}`;
    boxes.forEach((box,index)=>{
        boxes[index].innerText="";
        boxes[index].classList.remove("win");
        boxes[index].style.pointerEvents="all";
    });
    
}

Game();


function handleClick(index)
{
    if(Gamegrid[index]==="")
    {
         boxes[index].innerHTML=currentPlayer;
         Gamegrid[index]=currentPlayer;
         boxes[index].style.pointerEvents="none";
         swapTurn();
         checkGame();
    }
}

function swapTurn(){
    if(currentPlayer==="X")
    currentPlayer="O";
    else
    currentPlayer="X";
    gameInfo.innerText=`Current Player- ${currentPlayer}`;
}

function checkGame(){
        let ans="";
        winningPositions.forEach((position)=>{
            if(Gamegrid[position[0]]!=="" || Gamegrid[position[1]]!=="" || Gamegrid[position[2]]!=="")
            {
                if(Gamegrid[position[0]]===Gamegrid[position[1]] && Gamegrid[position[1]]===Gamegrid[position[2]])
                {
                    if(Gamegrid[position[0]]==="X")
                    ans="X";
                    else
                    ans="O";
                    boxes[position[0]].classList.add("win")
                    boxes[position[1]].classList.add("win");
                    boxes[position[2]].classList.add("win");
                    gameInfo.innerText=`Winning Player- ${ans}`;
                    newGameBtn.classList.add("active");
                    newGameBtn.addEventListener("click",Game);
                }
            }
             if(ans!=="")
             {
                boxes.forEach((box)=>{
                box.style.pointerEvents="none";
                });
                
             }         
             else
             {
                let fill=0;
                Gamegrid.forEach((box)=>{
                    if(box!=="")
                    fill++;
                })
                if(fill==9)
                {
                    boxes.forEach((box)=>{
                        box.style.pointerEvents="none";
                        });
                    gameInfo.innerText="Game Tied";
                    newGameBtn.classList.add("active");
                    newGameBtn.addEventListener("click",Game);
                }
             }
        });
}
boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    })
});
const t2=performance.now();

console.log(t2-t1);

