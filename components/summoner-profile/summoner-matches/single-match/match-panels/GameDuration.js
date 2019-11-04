import React from 'react';

const GameDuration = ( props ) =>{
    return(
        <div className = 'panel game-duration'>
            <p>{props.matchWon}</p>
            <p>{props.gameTime}</p>
        </div>
    )
}
export default GameDuration;