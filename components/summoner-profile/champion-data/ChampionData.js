import React from 'react';

const ChampionData = ( props ) => {
    const { champion } = props;
    const championImage = <img src = {`/static/ddragon/img/champion/${champion.image.full}`} />;

    return(
        <div className = 'panel champion'>
            <div className = 'champion-image'>
                {championImage}
            </div>
            <div className = 'champion-name'>
                <p>{champion.id}</p>
            </div>
        </div>
        
    )
}
export default ChampionData