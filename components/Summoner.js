import React from 'react';
import SummonerProfile from './summoner-profile/SummonerProfile';
import NoSummonerSearched from './NoSummonerSearched';

const Summoner = ( props ) =>{
    let summonerProfile = null;
    if(props.summoner !== null){
        summonerProfile = <SummonerProfile summoner = {props.summoner} />
    }else{
        summonerProfile = <NoSummonerSearched />
    }
    return(
        <div className = 'summoner-profile'>
            {summonerProfile} 
        </div>
    )
}

export default Summoner;