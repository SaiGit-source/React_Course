import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
// Which player is currently active: two components need that information.
// So we manage the State in the ancestor component that have access to both components, which is the App component
import {useState} from 'react' // for active player

// to declare a player has won, we got to look for a winning combination after each click
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

// Array of Arrays
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

// derivation functions()
function deriveActivePlayer(gameTurns){
  // deriving from existing state gameTurns
  let currPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player==='X'){
    // the latest turn, we add at head always, so [0], is it 'X'?
    currPlayer='O'
  }
    return currPlayer
  
}

function deriveGameBoard(gameTurns){  
  //  let gameBoard = initialGameBoard; // when we restart the game, gameBoard is referring to memory of 'initialGameBoard' and 'initialGameBoard' array is not reset, it doesn't work without deep copy
  let gameBoard = [...initialGameBoard.map(arr => [...arr])] // now we are adding a brand new memory for gameBoard
  // populate gameBoard with gameTurns array
  for (const turn of gameTurns){
      const { cell, player } = turn // we get the keys out
      const {row, col } = cell

      gameBoard[row][col] = player // player has the symbol
  }
  return gameBoard
}

function deriveWinner(gameBoard, players){
  let winner = undefined
  for (const combination of WINNING_COMBINATIONS){
    const firstCellSymbol = gameBoard[combination[0].row][combination[0].column] 
    const secondCellSymbol = gameBoard[combination[1].row][combination[1].column] 
    const thirdCellSymbol = gameBoard[combination[2].row][combination[2].column] 

    if (firstCellSymbol!=null && 
        firstCellSymbol===secondCellSymbol && 
        secondCellSymbol===thirdCellSymbol)
        {
          //winner=firstCellSymbol
          winner = players[firstCellSymbol] // symbol is the key and name is the value
      }
  }
  return winner
}


function App() {
  //const [activePlayer, setActivePlayer] = useState('X'); // concept of lifting the State up
  // to restart the game we got to reset this state to empty then other derived states will be reset as well
  const [gameTurns, setGameTurns] = useState([]); // dynamic array for Logs, again lifting the State
  // to output player name instead of player symbol while declaring winner
  const [players, setPlayers]  = useState(PLAYERS)

  const activePlayer = deriveActivePlayer(gameTurns)

  // from gameTurns we are deriving the gameBoard
  // we are moving gameBoard to App.jsx to determine the winner
  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)

  const hasDraw = gameTurns.length==9 && !winner // no winner but all cells not null

  // we can use WINNING_COMBINATIONS here because this function is triggered when a cell is clicked
  function handleSelectCellApp(rowIndex, colIndex) {
    //setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    // now we need to know which player clicked which cell that's why we need index
    // update state in immutable way and we are not merging different states
    // this is for updating another state based on old state
    setGameTurns(prevTurns => {
      /*let currPlayer = 'X'
      if (prevTurns.length > 0 && prevTurns[0].player==='X'){
        // the latest turn, we add at head always, so [0], is it 'X'?
        currPlayer='O'
      }*/
      // we still got the activePlayer without managing any states
      const currPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{cell : {row:rowIndex, col:colIndex}, player: currPlayer},
        ...prevTurns,]
      return updatedTurns
    });
  }
// for active player, first we toggle between a 'X' and 'O' then accordingly we set the isActive props

// to restart game when it is over
function handleRestart(){
  setGameTurns([]);
}

// to display player name instead of symbol
function handlePlayerNameChange(symbol, newName){
  setPlayers(prevPlayers => {
    return {
    ...prevPlayers, 
    [symbol]: newName
  }
  })
}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/*Player name="Player1" components work isolated still uses the same logic */}
          <Player initialName={PLAYERS.X} 
                  symbol='X' 
                  isActive={activePlayer==='X'} 
                  onNameChange={handlePlayerNameChange}>
          </Player>
          <Player initialName={PLAYERS.O} 
                  symbol='O' 
                  isActive={activePlayer==='O'} 
                  onNameChange={handlePlayerNameChange}>
          </Player>
        </ol>
        {(winner||hasDraw) && <GameOver winner={winner} onRestart={handleRestart}></GameOver>}
        <GameBoard 
          onSelectCell={handleSelectCellApp} 
          board={gameBoard}></GameBoard>
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  )
}

export default App
