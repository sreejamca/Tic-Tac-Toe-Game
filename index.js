//This method refers to the built-in object provided by the browser.It represents the browser window that contains the document.

window.addEventListener("DOMContentLoaded",()=>{
    //getting the DOM elements.
    const boards = document.getElementsByClassName("cell");
    const board=Array.from(boards);
    const playerDisplay=document.querySelector(".display-player");
    const winner=document.querySelector(".winner");
    const resetButton=document.querySelector("#btn");
   //This board has 9 cells starting with index0 to index8.
    let gameBoard=['','','','','','','','',''];
    //when starting the game,both current and previous player is player X.
    let currentPlayer='X';
    let prevPlayer = 'X';
    //setting the game is active.
    isGameActive=true;
    //set the winners.
    const PLAYERX_WON="PLAYERX_WINS!";
    const PLAYERO_WON="PLAYERO_WINS!";
    const tie="TIE";
    //declaring the winning criteria.
    const winningConditions=[
     [0,1,2],[0,3,6],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    // a function to check the result.
    function ResultCheck(){
        //when the geme starts,no one won so far,so set it to false.
     let roundWon=false;
     // a for loop to iterate each winning criteria.
     for(let i=0; i<=7; i++){
        const winCondition=winningConditions[i];
        const a=gameBoard[winCondition[0]];
        const b=gameBoard[winCondition[1]];
        const c=gameBoard[winCondition[2]];
        //checking the condition if any of these cells are empty,then continue playing.
        if(a===''||b===''||c===''){
            continue;
        }
        //if a,b,c are same values then,game over and the player won the first round.
        if(a===b&&b===c){
            roundWon=true;
            break;
        }
     }
     //if a player already won the round then,announce the winner after checking who is the current player.
     if(roundWon){
        message(currentPlayer==='X'?PLAYERX_WON:PLAYERO_WON);
        //after the annnouncement,set the game not active.
        isGameActive=false;
        return;
     }
     //the board doesn't have any more cells left to play,but none of the players win the round then it is a Draw or tie.
     if(!gameBoard.includes(''))
     message(tie);
    }
    // A function to announce the winner.
    function message(type){
        switch(type){
            case PLAYERX_WON:
                winner.innerText="Player X Wins!";//if playerX wins,then the winner element's text should be "PlayerX wins".
                break;
            case PLAYERO_WON://if playerO wins,then the winner element's text should be "PlayerO wins".
                winner.innerText="Palyer O Wins!";
                break;
            case tie://if it's a tie then, the text should be "tie".
                winner.innerText="TIE";
                break;
        }
        //remove the hide class from winner classlist.
        winner.classList.remove('hide');

    }
    // A function to check the valid action of the board.
    function isValidAction(board){
        //checks the innertext whether X or O
        if(board.innerText==='X'||board.innerText==='O'){
            return false;
        }
        return true;
    }
    //A function to update the board with it's index
    const updateBoard=(index)=>{
      gameBoard[index]=currentPlayer;
    }
    // A function to check if the current player is X, then change it to O and viceversa.
    const changePlayer=()=>{
    currentPlayer=currentPlayer==='X'? 'O':'X';
    //invoking a function to change the player's turn each time.
    applyHeaderTextStyle(playerDisplay, currentPlayer);

    }
    // A function checking the board's innertext and is the game active.
    const playerAction=(board,index)=>{
        //if both conditions are true,
        if(isValidAction(board)&&isGameActive)
        {
            //now the board's innertesrt is current player.
            board.innerText=currentPlayer;
            //add the current player to the board class list.
            board.classList.add(`palyer${currentPlayer}`);
            //if the condition is true,
            if(currentPlayer=='O')
            {
                //swap the class cell and class cell1.
            board.classList.replace('cell','cell1');
            }
            if(currentPlayer=='X')
            {
            board.classList.replace('cell1','cell');
            }
            //calling functions to update the board,check the result, and tehn  change the palyer.
            updateBoard(index);
            ResultCheck();
            changePlayer();
        }
    }
// when you click the board ,it should call the player's turn.
    board.forEach((board,index)=>{
        board.addEventListener('click',()=>playerAction(board,index));
    });
    applyHeaderTextStyle(playerDisplay, currentPlayer);
    //A function to reset the board after a round of game and the winner announcement.
    const resetBoard=()=>{
        //board is empty
        gameBoard=['','','','','','','','',''];
        //game is active
        isGameActive=true;
        //hide the winner announcement.
        winner.classList.add('hide');
        board.forEach(board=>{
           // board innertext is empty.
            board.innerText='';
            //remove the players from the board classlist.
            board.classList.remove('playerX');
            board.classList.remove('playerO');
        });
        //change player and set the previous player.
    if(prevPlayer == 'X')
    {
        currentPlayer = 'X';
        changePlayer();
        prevPlayer = 'O';
    }
    else if(prevPlayer == 'O')
    {
        currentPlayer = 'O';
        changePlayer();
        prevPlayer = 'X';
    }
    }
//click the reset button to reset the board.
    resetButton.addEventListener('click',resetBoard);
});
//function to change the player's turn.
function applyHeaderTextStyle(playerDisplay, currentPlayer) {
    playerDisplay.classList.remove(`Player${currentPlayer}`);
    playerDisplay.innerText = currentPlayer;
    if (currentPlayer === 'X') {
        playerDisplay.classList.replace('playerO', 'playerX');
    } else if (currentPlayer === 'O') {
        playerDisplay.classList.replace('playerX', 'playerO');
    }
}

