import {useState} from 'react'

export default function Player({initialName, symbol, isActive, onNameChange}){
    const [ isEditing, setIsEditing] = useState(false);
    const [ pName, setPlayerName] = useState(initialName);

    // this is trigger when we hit save
    function handleEditClick(){
        // setIsEditing(!isEditing) // to update a state based on previous state this is not the correct way
        // because React is scheduling the state updates and say we have two same lines they will both be scheduled to 'true' if the initial value was 'false'. instead if we used a function(), it will change immediately
        // thats why it's a good practice to use a function() because we will be always working with the latest state value 
        setIsEditing((editing) => !editing)
        if (isEditing===true){
            onNameChange(symbol, pName) // to get player name from symbol
        }
    }

    function handleInputChange(event) {
        setPlayerName(event.target.value)
    }

    let playerName = <span className='player-name'>{pName}</span>

    if (isEditing===true){
        playerName = <input type="text" required value={pName} onChange={handleInputChange}></input>
    } // 'defaultValue' instead of 'value' allows editing
    // onChange= with 'state' is TwoWayBinding

    return (
        <li className={isActive ? 'active' : undefined}> {/* if player is active */}
        <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>

    )
}