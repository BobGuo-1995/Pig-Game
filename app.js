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

// we want to keep things clean by using one variable 

var scores, roundScore,activePlayer,gamePlaying;
init();

/*scores = [0,0];
roundScore = 0;
activePlayer = 0; // who is playing at the momnent*/

// create a dice we need to use a random number 
// we can use the math object 
// Math.random(); Math.floor(), simply remove the decimal part of the number 
// Note to myself, do not forget parenthesis
//dice = Math.floor(Math.random() * 6) +1;

// we have the logic, now we need to do some DOM manipulation 
// the object that give us access to the DOM is the the document object 

// let us select stuff exactly like the way in CSS use # 
// to change the content we need to use .textContent
// we can do some changes to make this more dynamic 
// this changes only text but not the html content 

// document.querySelector('#current-' + activePlayer).textContent = dice; 
// everytime we want to write some html it has to be a string 
// we use querySelector to manipulate and change the element in the webpage 
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<\em>';
// this will show querySelector works not only for setting but also for reading 
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

// we can also use querySelector to change some element in css 
// we do not want to see the dice in the beginning 
// it is not a id we use the '.' to select a class
//document.querySelector('.dice').style.display = 'none';

// we will do the button interation 

// event: click a button scrolling and so on it is all event 
// we need to set up an event handler: function 

/*function btn(){
    // do something 
}

// normally you call a function 
btn();*/
// we want the event listenser to call it for it, it is a callback function, called by the other function
// document.querySelector('.btn-roll').addEventListener('click',btn)
// or we can call the function inside and it is unique, which is called an anonymous function 
// another method it is a bit faster than the querySelector 
// set everything to 0 to begin the game 
//document.getElementById('score-0').textContent = '0';
//document.getElementById('score-1').textContent = '0';
//document.getElementById('current-0').textContent = '0';
//document.getElementById('current-1').textContent = '0';


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

// document.querySelector('#current-' + activePlayer).textContent = dice; 
// everytime we want to write some html it has to be a string 
// we use querySelector to manipulate and change the element in the webpage 
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<\em>';
// this will show querySelector works not only for setting but also for reading 
//var x = document.querySelector('#score-0').textContent;
//console.log(x);















































