// Function to roll random dice number
function diceRoll() {
  var rollNumber = Math.floor((Math.random() * 6) + 1) //Picks random integer between 1 and 6
  return rollNumber
}

// Function to change dice 1 image
function diceOneImage(x) {
  var diceType = document.querySelector(".dice-one i").classList[1]

  if (x === 1) {
    document.querySelector(".dice-one i").classList.replace(diceType, "fa-dice-one");
  } else if (x === 2) {
    document.querySelector(".dice-one i").classList.replace(diceType, "fa-dice-two");
  } else if (x === 3) {
    document.querySelector(".dice-one i").classList.replace(diceType, "fa-dice-three");
  } else if (x === 4) {
    document.querySelector(".dice-one i").classList.replace(diceType, "fa-dice-four");
  } else if (x === 5) {
    document.querySelector(".dice-one i").classList.replace(diceType, "fa-dice-five");
  } else if (x === 6) {
    document.querySelector(".dice-one i").classList.replace(diceType, "fa-dice-six");
  }
}


// Function to change dice 2 image
function diceTwoImage(y) {
  var diceType = document.querySelector(".dice-two i").classList[1]

  if (y === 1) {
    document.querySelector(".dice-two i").classList.replace(diceType, "fa-dice-one");
  } else if (y === 2) {
    document.querySelector(".dice-two i").classList.replace(diceType, "fa-dice-two");
  } else if (y === 3) {
    document.querySelector(".dice-two i").classList.replace(diceType, "fa-dice-three");
  } else if (y === 4) {
    document.querySelector(".dice-two i").classList.replace(diceType, "fa-dice-four");
  } else if (y === 5) {
    document.querySelector(".dice-two i").classList.replace(diceType, "fa-dice-five");
  } else if (y === 6) {
    document.querySelector(".dice-two i").classList.replace(diceType, "fa-dice-six");
  }
}

// To run only when page is reloaded/refreshed
if (performance.navigation.type === 1) { //Use of depricated method since I was not able to find better one to see if page was reloaded
  var diceOne = diceRoll() //Dice roll player 1
  var diceTwo = diceRoll() //Dice roll player 2\
  console.log(diceOne, diceTwo)

  //Change dice images on webpage
  diceOneImage(diceOne);
  diceTwoImage(diceTwo);


  // Change header to reflect outcome of dice roll
  if (diceOne > diceTwo) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
    console.log("Player 1 wins!")
  } else if (diceTwo > diceOne) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
    console.log("Player 2 wins!")
  } else {
    document.querySelector("h1").innerHTML = "Draw"
    console.log("Draw")
  }
}
