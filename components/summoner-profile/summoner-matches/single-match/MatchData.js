import React from 'react';
import ChampionItems from './match-panels/ChampionItems';
import ChampionKDA from './match-panels/ChampionKDA';
import ChampionPanel from './match-panels/ChampionPanel';
import GameDuration from './match-panels/GameDuration';
const MatchData = ( props ) => {
    const { champion, person, match, matchWon } = props;
    const championImage = <img src = {`/static/ddragon/img/champion/${champion.image.full}`} />;
    
    return(
        <div className = 'match-wrapper'>
            {/* TODO
            get ranked queue type in A:\league\ddragon\current\data\en_GB\queuetypes.json */}
            <GameDuration matchWon = { matchWon === true ? 'victory' : 'defeat'} gameTime = { new Date(match.gameDuration * 1000).toISOString().substr(11, 8) } />
            <ChampionPanel championImage = { championImage } championId = { champion.id } />
            <ChampionKDA stats = { person.stats } />
            <ChampionItems stats = { person.stats } />
        </div>
        
    )
}
export default MatchData