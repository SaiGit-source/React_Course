

export default function GameBoard({onSelectCell, board}){

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
    let gameBoard = board

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        {/*<button onClick={() => handleSelectCell(rowIndex, colIndex)}>*/}
                        {/* disabled to prevent multiple clicking of the same button. if it is not null, then we disable */}
                        <button onClick={() => onSelectCell(rowIndex, colIndex)} 
                                disabled={playerSymbol!==null}>
                            {playerSymbol}
                        </button>
                    </li>))
                    }
                </ol>
            </li>)}
        </ol>
    )
}