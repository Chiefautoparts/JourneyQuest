'use strict';
// var fighter = []
// var characters = [fighter, mage, archer];
//
// var character = {
//   chClass: 'Fighter',
//   health: 100,
//   magika: 25,
//   weapon: 'two-handed sword',
//   special: 'Power attack x2 damage',
//   displayStats: function() {
//     return('Fighter: 100HP 25MG');
//   }
// };
var begining = 'You awake in a haze in a room you have never been in before. Confused, your mind in a haze you quickly take in your surroundings. To your left there is a door leaving the room, straight in front of you are several bookselves and a desk with scattered pappers across it and to your right there is wardrobe what appears to be a sleeping area and several cabinets one of which is locked.';

var startQuest = document.getElementById('scene');
var playerChoices = document.getElementById('choices'); //ordered list id//
var optionOne = document.getElementById('one');
var optionTwo = document.getElementById('two');
var optionThree = document.getElementById('three');
startQuest.innerText = begining;
