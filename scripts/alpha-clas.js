// function play(){
//     //step:1: hide the home screen . to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection)
//     // show the playground

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');

//     // console.log(playgroundSection.classList)
// }

function handleKeyboardKeyUpEvent(event){
   const playerPressed = event.key;
   //key player is expected to press
   const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText;
   const expectedAlphabet = currentAlphabet.toLowerCase();

   //check right or wrong key

   if(playerPressed === expectedAlphabet){
    console.log('you get point');
    console.log('you pressed expect alphabet', expectedAlphabet)
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
   }

   else {
    console.log(' dor miaa');
   }
    
}
   document.addEventListener('keyup', handleKeyboardKeyUpEvent);

// function handleKeyboardButtonPress(){
//     console.log('button pressed');
// }
// //capture keyboard key press
// document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    //step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    //set randomly generated alphabet to the show screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}