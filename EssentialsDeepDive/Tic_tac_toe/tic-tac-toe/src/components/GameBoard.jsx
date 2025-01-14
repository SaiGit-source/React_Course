
// Array of Arrays
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({onSelectCell, activePlayerSymbol, turns}){

    /* we are not using gameGoard state because it doesn't keep track of the order the buttons were clicked
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectCell(rowIndex, colIndex){
        
        //setGameBoard((prevGameBoard) => {    
        //    prevGameBoard[rowIndex][colIndex]='X';
        //})
        //   not recommended 
           // instead we are copying into a new variable 'updateBoard'
           // updating/returning in an immutable way strongly recommended
        setGameBoard((prevGameBoard) => {    
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            //updatedBoard[rowIndex][colIndex] = 'X'
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol
        return updatedBoard
        })
        onSelectCell(); // this comes from App.jsx
    }*/

    let gameBoard = initialGameBoard;
    // populate gameBoard with turns array
    for (const turn of turns){
        const { cell, player } = turn // we get the keys out
        const {row, col } = cell

        gameBoard[row][col] = player // player has the symbol

    }    

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        {/*<button onClick={() => handleSelectCell(rowIndex, colIndex)}>*/}
                        <button onClick={() => onSelectCell(rowIndex, colIndex)}>
                            {playerSymbol}
                        </button>
                    </li>))
                    }
                </ol>
            </li>)}
        </ol>
    )
}