import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {
  
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/*Player name="Player1" components work isolated still uses the same logic */}
          <Player initialName="Player1" symbol="X"></Player>
          <Player initialName="Player2" symbol="O"></Player>
        </ol>
        <GameBoard></GameBoard>
      </div>
    </main>

  )
}

export default App
