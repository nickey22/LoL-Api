import React from 'react';
const ChampionPanel = ( props ) => {
    return(
        <div className = 'panel champion'>
            <div className = 'champion-image'>
                {props.championImage}
            </div>
            <div className = 'champion-name'>
                <p>{props.championId}</p>
            </div>
        </div>
    )
}
export default ChampionPanel;