let flag=0;
var box1_value=document.getElementById("box1").value;
var box2_value=document.getElementById("box2").value;
var box3_value=document.getElementById("box3").value;
var box4_value=document.getElementById("box4").value;
var box5_value=document.getElementById("box5").value;
var box6_value=document.getElementById("box6").value;
var box7_value=document.getElementById("box7").value;
var box8_value=document.getElementById("box8").value;
var box9_value=document.getElementById("box9").value;
let countX=0
let countO=0
updateScore()
function box1(){
    if(flag===0){
        box1_value=document.getElementById("box1").value="X"
        document.getElementById('box1').style.pointerEvents = 'none';
        flag=1
        
        main()
    }
    else{
        box1_value=document.getElementById("box1").value="O"
        document.getElementById('box1').style.pointerEvents = 'none';
        flag=0
        main()
    }
}
function box2(){
    if(flag===0){
        box2_value=document.getElementById("box2").value="X"
        document.getElementById('box2').style.pointerEvents = 'none';
        flag=1
        main()
    }
    else{
        box2_value=document.getElementById("box2").value="O"
        document.getElementById('box2').style.pointerEvents = 'none';
        flag=0
        main()
    }
}
function box3(){
    if(flag===0){
        box3_value=document.getElementById("box3").value="X"
        document.getElementById('box3').style.pointerEvents = 'none';
        flag=1
        main()
    }
    else{
        box3_value=document.getElementById("box3").value="O"
        document.getElementById('box3').style.pointerEvents = 'none';
        flag=0
        main()
    }
}
function box4(){
    if(flag===0){
        box4_value=document.getElementById("box4").value="X"
        document.getElementById('box4').style.pointerEvents = 'none';
        flag=1
        main()
    }
    else{
        box4_value=document.getElementById("box4").value="O"
        document.getElementById('box4').style.pointerEvents = 'none';
        flag=0
        main()
    }
}
function box5(){
    if(flag===0){
        box5_value=document.getElementById("box5").value="X"
        document.getElementById('box5').style.pointerEvents = 'none';
        flag=1
        main()
    }
    else{
        box5_value=document.getElementById("box5").value="O"
        document.getElementById('box5').style.pointerEvents = 'none';
        flag=0
        main()
    }
}
function box6(){
    if(flag===0){
        box6_value=document.getElementById("box6").value="X"
        document.getElementById('box6').style.pointerEvents = 'none';
        flag=1
        main()
    }
    else{
        box6_value=document.getElementById("box6").value="O"
        document.getElementById('box6').style.pointerEvents = 'none';
        flag=0
        main()
    }
}
function box7(){
    if(flag===0){
        box7_value=document.getElementById("box7").value="X"
        document.getElementById('box7').style.pointerEvents = 'none';
        flag=1
        main()
    }
    else{
        box7_value=document.getElementById("box7").value="O"
        document.getElementById('box7').style.pointerEvents = 'none';
        flag=0
        main()
    }
}
function box8(){
    if(flag===0){
        box8_value=document.getElementById("box8").value="X"
        document.getElementById('box8').style.pointerEvents = 'none';
        flag=1
        main()
    }
    else{
        box8_value=document.getElementById("box8").value="O"
        document.getElementById('box8').style.pointerEvents = 'none';
        flag=0
        main()
    }
}
function box9(){
    if(flag===0){
        box9_value=document.getElementById("box9").value="X"
        document.getElementById('box9').style.pointerEvents = 'none';
        flag=1
        main()
    }
    else{
        box9_value=document.getElementById("box9").value="O"
        document.getElementById('box9').style.pointerEvents = 'none';
        flag=0
        main()
    }
}

//Main Logic
function main(){

    //For 1st row if X wins
    if(box1_value==="X"&&box2_value==="X"&&box3_value==="X"){
        alert("Player X won the game")
        countX++
        resetGame()
        updateScore()
    }
    //For 1st row if O wins
    else if(box1_value==="O"&&box2_value==="O"&&box3_value==="O"){
        alert("Player O won the game")
        countO++
        resetGame()
        updateScore()
    }
    //For 2nd row if X wins
    else if(box4_value==="X"&&box5_value==="X"&&box6_value==="X"){
        alert("Player X won the game")
        countX++
        resetGame()
        updateScore()
    }
    //For 2nd row if O wins
    else if(box4_value==="O"&&box5_value==="O"&&box6_value==="O"){
        alert("Player O won the game")
        countO++
        resetGame()
        updateScore()
    }
    //For 3rd row if X wins
    else if(box7_value==="X"&&box8_value==="X"&&box9_value==="X"){
        alert("Player X won the game")
        countX++
        resetGame()
        updateScore()
    }
    //For 3rd row if O wins
    else if(box7_value==="O"&&box8_value==="O"&&box9_value==="O"){
        alert("Player O won the game")
        countO++
        resetGame()
        updateScore()
    }
    //For 1st column if X wins
    else if(box1_value==="X"&&box4_value==="X"&&box7_value==="X"){
        alert("Player X won the game")
        countX++
        resetGame()
        updateScore()
    }
    //For 1st column if O wins
    else if(box1_value==="O"&&box4_value==="O"&&box7_value==="O"){
        alert("Player O won the game")
        countO++
        resetGame()
        updateScore()
    }
    //For 2nd column if X wins
    else if(box2_value==="X"&&box5_value==="X"&&box8_value==="X"){
        alert("Player X won the game")
        countX++
        resetGame()
        updateScore()
    }
    //For 2nd column if O wins
    else if(box2_value==="O"&&box5_value==="O"&&box8_value==="O"){
        alert("Player O won the game")
        countO++
        resetGame()
        updateScore()
    }
    //For 3rd column if X wins
    else if(box3_value==="X"&&box6_value==="X"&&box9_value==="X"){
        alert("Player X won the game")
        countX++
        resetGame()
        updateScore()
    }
    //For 3rd column if O wins
    else if(box3_value==="O"&&box6_value==="O"&&box9_value==="O"){
        alert("Player O won the game")
        countO++
        resetGame()
        updateScore()
    }
    //For Left Diagnol if X Wins
    else if(box1_value==="X"&&box5_value==="X"&&box9_value==="X"){
        alert("Player X won the game")
        countX++
        resetGame()
        updateScore()
    }
    //For Left Diagnol if O Wins
    else if(box1_value==="O"&&box5_value==="O"&&box9_value==="O"){
        alert("Player O won the game")
        countO++
        resetGame()
        updateScore()
    }
    //For Right Diagnol if X Wins
    else if(box3_value==="X"&&box5_value==="X"&&box7_value==="X"){
        alert("Player X won the game")
        countX++
        resetGame()
        updateScore()
    }
    //For Right Diagnol if O Wins
    else if(box3_value==="O"&&box5_value==="O"&&box7_value==="O"){
        alert("Player O won the game")
        countO++
        resetGame()
        updateScore()
    }
    else if(box1_value!==""&&box2_value!==""&&box3_value!==""&&box4_value!==""&&box5_value!==""&&box6_value!==""&&
    box7_value!==""&&box8_value!==""&&box9_value!==""){
        alert("Draw! Try again")
        resetGame()
    }
    
}

//Update ScoreBoard

function updateScore(){
    document.getElementById("player1").innerHTML=countX;
    document.getElementById("player2").innerHTML=countO;
}

// Reset Game

function resetGame(){
    document.getElementById('box1').style.pointerEvents = 'auto';
    document.getElementById('box2').style.pointerEvents = 'auto';
    document.getElementById('box3').style.pointerEvents = 'auto';
    document.getElementById('box4').style.pointerEvents = 'auto';
    document.getElementById('box5').style.pointerEvents = 'auto';
    document.getElementById('box6').style.pointerEvents = 'auto';
    document.getElementById('box7').style.pointerEvents = 'auto';
    document.getElementById('box8').style.pointerEvents = 'auto';
    document.getElementById('box9').style.pointerEvents = 'auto';
    box1_value=document.getElementById("box1").value=""
    box2_value=document.getElementById("box2").value=""
    box3_value=document.getElementById("box3").value=""
    box4_value=document.getElementById("box4").value=""
    box5_value=document.getElementById("box5").value=""
    box6_value=document.getElementById("box6").value=""
    box7_value=document.getElementById("box7").value=""
    box8_value=document.getElementById("box8").value=""
    box9_value=document.getElementById("box9").value=""
    flag=0
}

//Reset Button when clicked
function resetBoard(){
    resetGame();
    countX=0
    countO=0
    updateScore();
}