import React from 'react';
import SummonerMatch from './single-match/SummonerMatch';
import data from '../../../static/ddragon/db/champion.json'
const SummonerMatches = ( props ) => {
    const { matches, summonerID } = props;
    return(
        <div className = 'matches'>
            {matches.map((match,key) => {return <SummonerMatch matchData = {data.data} summonerID = {summonerID} key = {key} match = {match} />})}
        </div>
    )
}

export default SummonerMatches;
