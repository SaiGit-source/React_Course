import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
// Which player is currently active: two components need that information.
// So we manage the State in the ancestor component that have access to both components, which is the App component
import {useState} from 'react' // for active player

function App() {
  const [activePlayer, setActivePlayer] = useState('X'); // concept of lifting the State up

  const [gameTurns, setGameTurns] = useState([]); // dynamic array for Logs, again lifting the State

  function handleSelectCellApp(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    // now we need to know which player clicked which cell that's why we need index
    // update state in immutable way and we are not merging different states
    setGameTurns(prevTurns => {
      let currPlayer = 'X'
      if (prevTurns.length > 0 && prevTurns[0].player==='X'){
        // the latest turn, we add at head always, so [0], is it 'X'?
        currPlayer='O'
      }
      const updatedTurns = [{cell : {row:rowIndex, col:colIndex}, player: currPlayer},
        ...prevTurns,]
      return updatedTurns
    });
  }
// for active player, first we toggle between a 'X' and 'O' then accordingly we set the isActive props

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/*Player name="Player1" components work isolated still uses the same logic */}
          <Player initialName="Player1" symbol='X' isActive={activePlayer==='X'}></Player>
          <Player initialName="Player2" symbol='O' isActive={activePlayer==='O'}></Player>
        </ol>
        <GameBoard 
          onSelectCell={handleSelectCellApp} 
          activePlayerSymbol={activePlayer}
          turns={gameTurns}></GameBoard>
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  )
}

export default App
