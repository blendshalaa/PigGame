'use strict';

//Selecting elements 
const score0EL=document.querySelector('#score--0');
const score1EL=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');

//starting condition

score0EL.textContent=0;
score1EL.textContent=0;
diceEl.classList.add('hidden')