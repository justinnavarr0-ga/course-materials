/*----- app's state (variables) -----*/
let game;

/*----- cached element references -----*/
const boardEl = document.getElementById('board');
const msgEl = document.getElementById('message');

/*----- classes -----*/
class Square {
  constructor(domElement, value) {
    this.domElement = domElement;
    this.value = null;
  }

  static renderLookup = {
    '1': 'purple',
    '-1': 'orange',
    'null': 'gray'
  }

  render() {
    this.domElement.style.backgroundColor = Square.renderLookup[this.value];
  }
}

class ImageSquare extends Square {

  constructor(domElement, secondsPerRotation = 0) {
    super(domElement);
    // Specialize!
    this.domElement.style.animationDuration = `${secondsPerRotation}s`;
  }

  // No new properties, so no reason to 
  // update the constructor

  // Override the inherited renderLookup
  static renderLookup = {
    '1': 'https://imagen.research.google/main_gallery_images/a-strawberry-mug.jpg',
    '-1': 'https://imagen.research.google/main_gallery_images/a-photo-of-a-corgi-dog-riding-a-bike-in-times-square.jpg',
    'null': 'darkgrey'
  };

  // Override the inherited render
  render() {
    if (this.value) {
      this.domElement.style.backgroundImage = `url(${ImageSquare.renderLookup[this.value]})`;
    } else {
      this.domElement.style.backgroundImage = '';
    }
  }
}

class TicTacToeGame {
  // Code to define the properties and methods
  constructor(boardElement, messageElement) {
    // Adds properties to the new object
    this.boardElement = boardElement
    this.messageElement = messageElement
    // A return statement is not needed because the constructor automatically returns a new object by default.

    // Will want to use the map method later,
    // create an array instead of a NodeList
    this.squareEls = [...boardElement.querySelectorAll('div')];

    // boardElement event listener:
    this.boardElement.addEventListener('click', (evt) => {
      // Obtain index of square
      const idx = this.squareEls.indexOf(evt.target);
      // Guards
      if (
        // Didn't click <div> in grid
        idx === -1 ||
        // Square already taken
        this.squares[idx].value ||
        // Game over
        this.winner
      ) return;
      // Update the square object
      this.squares[idx].value = this.turn;  // common typo 
      // Update other state (turn, winner)
      this.turn *= -1;
      this.winner = this.getWinner();
      // Render updated state
      this.render();
    });

  }

  static winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  static about() {
    console.log("I'm the TicTacToeGame class!")
  }

  // Adding play method (prototype method)
  play() {
    this.turn = 1;
    this.winner = null;
    this.squares = this.squareEls.map(el => new ImageSquare(el, 3));

    // Renders the game.
    this.render();
  }

  getWinner() {
    // Shortcut variable
    const combos = TicTacToeGame.winningCombos;
    for (let i = 0; i < combos.length; i++) {
      if (Math.abs(this.squares[combos[i][0]].value + this.squares[combos[i][1]].value + this.squares[combos[i][2]].value) === 3)
        return this.squares[combos[i][0]].value;
    }
    // Array.prototype.some iterator method!
    if (this.squares.some(square => square.value === null)) return null;
    return 'T';
  }

  render() {
    // Square objects are responsible for rendering themselves
    this.squares.forEach(square => square.render());
    // NEW CODE BELOW
    if (this.winner === 'T') {
      this.messageElement.innerHTML = 'Rats, another tie!';
    } else if (this.winner) {
      this.messageElement.innerHTML = `Player ${this.winner === 1 ? 1 : 2} Wins!`;
    } else {
      this.messageElement.innerHTML = `Player ${this.turn === 1 ? 1 : 2}'s Turn`;
    }
  }

  toString() {
    return `Tic-Tac-Toe / winner -> ${this.winner}`;
  }
}

const btn = document.querySelector('button');
// btn.addEventListener('click', initialize());
btn.addEventListener('click', function (evt) {
  initialize();
})

/*----- functions -----*/
initialize();

function initialize() {
  game = new TicTacToeGame(boardEl, msgEl);
  game.play();
}

game.play()