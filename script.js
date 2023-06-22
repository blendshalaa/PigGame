'use strict';

//Selecting elements 
const player1EL=document.querySelector('.player--1')
const player0EL=document.querySelector('.player--0')
const score0EL=document.querySelector('#score--0');
const score1EL=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');
const current0El=document.getElementById('current--0');
const current1EL=document.getElementById('current--1');

//starting condition

score0EL.textContent=0;
score1EL.textContent=0;
diceEl.classList.add('hidden');

const score=[0,0];

 let currentScore=0;
 let activePlayer=0;




const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll')
const btnHold=document.querySelector('.btn--hold');



btnRoll.addEventListener('click',function(){
    //1.Generating a random dice roll
    const dice=Math.trunc(Math.random()*6)+1;
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;




   
    if(dice!==1){
        //add dice to currentscore
currentScore+=dice;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;



    }else{
        document.getElementById(`current--${activePlayer}`).textContent=0;
        //switch to next player
activePlayer=activePlayer===0?1:0;
currentScore=0;  
player0EL.classList.toggle('player--active');
player1EL.classList.toggle('player--active');
    }

})
