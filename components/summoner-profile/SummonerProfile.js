import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import SummonerMatches from './SummonerMatches';
import '../../sass/partials/summoner-profile.sass'

const SummonerProfile = ( props ) => {
    const { name, summonerLevel, accountId } = props.summoner;
    return(
        <Wrapper>
            <div className = 'summoner-information'>
                <h1>{name}</h1>
                <p>lvl {summonerLevel}</p>
            </div>
            <div className = 'summoner-matches'>
                <div className = 'title-block'>
                    <p>Match History</p>
                </div>
                <SummonerMatches summonerID = {accountId} matches = {props.summoner.matches} />
            </div>
        </Wrapper>
    )
}

export default SummonerProfile;