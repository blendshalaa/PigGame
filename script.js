'use strict';

//Selecting elements 
const score0EL=document.querySelector('#score--0');
const score1EL=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');
const current0El=document.getElementById('current--0');
const current1EL=document.getElementById('current--1');

//starting condition

score0EL.textContent=0;
score1EL.textContent=0;
diceEl.classList.add('hidden');
 let currentScore=0;



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
current0El.textContent=currentScore;//change later


    }else{
        //switch to next player

    }

})
