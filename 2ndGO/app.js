'use strict';

var userName = prompt('What is your name?');
console.log('welcome ' + userName + '. Now let us begin the Journey.');

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
  };
  firstEvent();
  function hallway(){
    var two = prompt('Now that you are standing in the hallway you must choose do you go right or left?');
    if(two = 'right'){
      console.log('You decide to to head to the right. You begin walking toward the window, there is a door at the end of the hallway by the window. You here muffled voices coming from behind the door, you are able to determine there could be 2 maybe 3 people in the room. ');
      prompt('Do you go 1. enter through the door or 2. exit out the window?');
      if('door'){
        console.log('You open the door and enter the room there are two people in the room they look equally confused as they look pissed off that you have interupted them watching Dr. Phil. "You arent suppose to be in here" shouts one of the men as the other reaches for his equipment on the floor next to the table. (if you acquired badass points from previous ordeal than you kicked in the door like a badass and said a badass oneliner upon your entry. you earned more badass points) do you attack or flee?');
        if('attack'){
          console.log('You reach for your blade, a small shive your prison bitch made for you, the two men in the room both pull out swords and ready themselves. you make a move at one of them catching him off guard as he did not expect you to have the balls to attack him with a fucking shive. You mangaged to sucessfully stab him with the shive and he drops to the ground now your attention focuses on the remain man. (if badass points than you say super badass pun as you stab his friend.) ');
        }
      }
    } else {
      console.log('You head down the hallway to the left. As you move closer to the door you hear voices, the closer you get you can make out that there are several and they seem to be angnry about something.');
    }
  }
}
