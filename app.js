/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// this game is actually called the pig game 

// variable declaration 
var scores, roundScore,activePlayer,gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    // do somrthing here when some one click the button 
    
    if(gamePlaying){
        // 1. Random number 
    var dice = Math.floor(Math.random() * 6) +1;
    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block'; // display the image 
    diceDOM.src = 'dice-' + dice + '.png'; // change the source of the image 
    
    
    // 3. Update the round score if the rolled number was not a 1 
    // looks like an if else statement 
    if (dice !== 1){
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else{
        // next player
        nextPlayer();
       
    }
}
    
});

document.querySelector('.btn-hold').addEventListener ('click', function(){
    
    // u can hold only if you did not win 
    if (gamePlaying){ 
    // Add CURRENT score to GLOBAL score 
    scores[activePlayer] += roundScore;
    // scores[activePlayer] = scores[activePlayer] + roundScore;
    
    // Update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    
    // Cheack if player won the game 
    if (scores[activePlayer] >= 20){
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
        // end game 
        gamePlaying =false;
    }else{
    // next player, only if he is not winning 
        nextPlayer();
      
    }
    }
   
    
    
});


function nextPlayer(){
    // Next player
        // tenary operator 
        activePlayer === 0 ? activePlayer =1 : activePlayer =0;
        /* if(activePlayer === 0){
            activePlayer =1;
        }else{
            activePlayer =0;
        }*/
        roundScore = 0;
        
        // also set the user interface to 0
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        // toggle, add the class if it is not there, if it is there remove
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        // whenever a new turn hide the dice 
        document.querySelector('.dice').style.display = 'none';
}

// start a new game
document.querySelector('.btn-new').addEventListener('click',init);
    // reset player score
//    scores = [0,0];
//    activePlayer = 0;
//    roundScore = 0;
   

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true ; 
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    
}
















































