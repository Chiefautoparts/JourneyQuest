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
var starting = 'You awake in a haze in a room you have never been in before. Confused, your mind in a haze you quickly take in your surroundings. To your left there is a door leaving the room, straight in front of you are several bookshelves and a desk with scattered papers across it and to your right there is wardrobe what appears to be a sleeping area and several cabinets one of which is locked. Do you....';
var createGame = function() {
    var game = document.getElementsByTagName('ol')[0];

    var optionOne = document.createElement('li');
    var textOne = document.createTextNode('Search the room.');
    optionOne.appendChild(textOne);
    game.appendChild(optionOne);
};
// var optionTwo = document.getElementById('two');
// var optionThree = document.getElementById('three');
//
// optionTwo.innerText = ' Get up and immediately exit through the door?';
// optionThree.innerText = 'Begin to panic, become aggressive and start smashing everything in sight. While screaming of course';
// ;
// playerChoices.appendChild(optionTwo);
// playerChoices.appendChild(optionThree);
createGame();