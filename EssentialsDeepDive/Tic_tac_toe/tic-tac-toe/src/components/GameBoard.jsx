import { useState } from "react"

// Array of Arrays
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard(){
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectCell(rowIndex, colIndex){
        /*
        setGameBoard((prevGameBoard) => {    
            prevGameBoard[rowIndex][colIndex]='X';
        })
           not recommended */
           // instead we are copying into a new variable 'updateBoard'
           // updating/returning in an immutable way strongly recommended
        setGameBoard((prevGameBoard) => {    
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = 'X'
        return updatedBoard
        })
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button onClick={() => handleSelectCell(rowIndex, colIndex)}>
                            {playerSymbol}
                        </button>
                    </li>))
                    }
                </ol>
            </li>)}
        </ol>
    )
}