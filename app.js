let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector(".reset")
 let newbtn=document.querySelector(".new-btn");
 let msgCantainer=document.querySelector(".msg-container")
//Turn of players X,O
let turnO=true;

let winTurms=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 
boxes.forEach((box)=>{
   box.addEventListener('click',()=>{
      if(turnO){
        box.innerHTML='O';
        turnO=false;
      }
      else{
        box.innerHTML='X';
        turnO=true;
      }
      box.disabled=true;
      checkWinner();
   }) ;
   
});
//this fnc is use to click reset or new game btn start again
const resetGame =()=>{
      turnO=true;
      enableBoxes();
      msgCantainer.classList.add("hide");
      
};
resetbtn.addEventListener('click',resetGame)
newbtn.addEventListener('click',resetGame)

//if any one win then not use any btn
const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
//if you click reset or new game btn then "btn is enable"(show)
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML='';
    }
}

// this fnc is show winner
const showWinner =(winner)=>{
     msg.innerHTML=`Congratulation,Winner is ${winner}`;
    msgCantainer.classList.remove("hide");
    disableBoxes()
}

//check the condition of win
const checkWinner =()=>{
    for(let pattern of winTurms){
         //console.log([pattern[0]])
         let pos1Val=boxes[pattern[0]].innerHTML;
         let pos2Val=boxes[pattern[1]].innerHTML;
         let pos3Val=boxes[pattern[2]].innerHTML;

         if(pos1Val != '' && pos2Val !='' && pos3Val !=''){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
               showWinner(pos1Val);
            }
         }
        }
};

