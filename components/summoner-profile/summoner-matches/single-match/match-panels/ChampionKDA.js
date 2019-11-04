import React from 'react';

const ChampionKDA = ( props ) => {
    const KDAString = props.stats.kills + '/' +props.stats.deaths + '/' + props.stats.assists;
    const KDA = props.stats.deaths !== 0 ? (props.stats.kills + props.stats.assists) / props.stats.deaths : props.stats.kills + props.stats.assists 
    return(
        <div className = 'panel kda'>
            <p>{KDAString}</p>
            <p>{KDA} KDA</p>
        </div>
    )

}

export default ChampionKDA;