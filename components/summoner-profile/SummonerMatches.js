import React from 'react';
import SummonerMatch from './SummonerMatch';
import data from '../../static/ddragon/db/champion.json'
const SummonerMatches = ( props ) => {
    const { matches, summonerID } = props;
    return(
        <div className = 'matches'>
            {matches.map((match,key) => {return <SummonerMatch championData = {data.data} summonerID = {summonerID} key = {key} match = {match} />})}
        </div>
    )
}

export default SummonerMatches;
