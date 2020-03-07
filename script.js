var randomN = Math.round(Math.random()*100);
var nbrTry = 1;
var numbb, submt , answ , trs , userN ;

function checkGuess()
{
   
     numbb = document.querySelector("#numb");
     answ = document.querySelector("#answer");
     trs = document.querySelector("#tries");
     submt = document.getElementById("mySubmit");
     userN = numbb.value;
    
    
   if(nbrTry == 1)
       {
           trs.innerHTML = "the previous numbers :";
       }
    trs.innerHTML += userN + " ";
    
    if(userN === randomN)
        {
            answ.innerHTML = "WOUAH! YOU WON!!";
            setGameOver();
        }
    else if(nbrTry == 3)
        {
            answ.innerHTML = "Game Over!"; 
            setGameOver();
        }
    else {
        answ.innerHTML = "try again!";
        if(userN < randomN){
            answ.innerHTML += "choose a greater number"
        }
        else if(userN > randomN)
            {
                answ.innerHTML += "choose a smaller number";
            }
    }
    nbrTry++;
    numbb.value = "";
    numbb.focus();
    
}

function setGameOver()
{
    numbb.disabled = true;
    submt.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click",resetGame);
}
function resetGame()
{
    nbrTry = 1;
    numbb.disabled = false;
    submt.disabled = false;
    resetButton.parentNode.removeChild(resetButton);
    answ.innerHTML = "";
    trs.innerHTML = " ";
}
