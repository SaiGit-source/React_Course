
// id="log" for styling reasons
// to see which turns were taken by different player whilst playing the game
// that means we need a dynamic array of turns, an array that grows with every button click
// to check who turn, we need to know the activePlayer, which is in App.jsx so we got to Lift state again
export default function Log({turns}){
    // `` template literal in Javascript to insert dynamic values
    return (
        <ol id="log">
            {turns.map((turn) => 
                    (<li key={`${turn.cell.row}${turn.cell.col}`}>
                        {turn.player} selected {turn.cell.row}, {turn.cell.col}
                        </li>
                    ))}
        </ol>
    )
}