'use strict';

var userName = prompt('What is your name?');
console.log('welcome ' + userName + '. Now let us begin the Journey.');
// var reset = prompt('Are you ready to continue ' + userName + '? (please enter yes or no into the input field)');
// if(reset = yes){
//
// }
function createGame(){
  function firstEvent(){
    var One = prompt('You awake in a room, there are several chests around, a desk, a couple book shelves and a bed. (please enter 1, 2, or   3 for you choice.) 1. exit the room quickly 2. search the room 3. panic and begin smashing everything you can get your hands on.');
    if(One = 1){
      console.log('You jump to your feet sprint towards the door smashing it from its hinges. you are now in an empty hallway, to your left   there is one door at the end of the hallway and to your right there is a window');
    } else if(One = 2){
      console.log('You search through the chests findin some gold pieces, a helmet, a wizard hat, 3 rocks, and a short sword. in the desk   you find more gold, and a map that appears to be a treasure map. the book shelves are of no help becuase you cannot read. you now exit  through the door you are now in an empty hallway, to your left there is one door at the end of the hallway and to your right there is   a window');
    } else {
      console.log('You start screaming as you run around the room, pulling the bookshelves to the ground, you perform a perfectly exicuted  flying elbow to one of the chest smashing it open and destroying the contents inside. finally you body slam the desk breaking it in   half. observing the destruction you have just caused you are proud of it but notice that you have destryed several items that probably  would have been usual but you dont mind because you are to fucking badass (you earn secret badass points)');
    }
    var two = prompt('Now that you are standing in the hallway you must choose do you go right or left?');
    if(two = 'right'){
      console.log('You decide to to head to the right. You begin walking toward the window, there is a door at the end of the hallway by the window. You here muffled voices coming from behind the door, you are able to determine there could be 2 maybe 3 people in the room.');
    }
  }
};
