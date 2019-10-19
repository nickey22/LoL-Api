import React, { useState } from 'react';
import ChampionData from './champion-data/ChampionData';
class SummonerMatch extends React.Component {
    state ={
        personID: null,
        person: null,
        champion: null
    }    


    componentDidMount(){
        const { match, summonerID } = this.props;
        let personID = null;
        let champion = null;
        match.participantIdentities.map((person) =>{
            if(person.player.accountId === summonerID){
                personID = person.participantId;
            }
        })
        let champID = match.participants[personID - 1].championId;
        const { championData } = this.props;

        Object.keys(this.props.championData).forEach((champ)=>{
            const champLoopID = championData[champ].key;
            if(parseInt(champLoopID) === parseInt(champID)){
                champion = championData[champ];
                return;
            }
        })
        this.setState({ personID: personID, person: match.participants[personID - 1],champion: champion })
    }
    render(){
        const { match, summonerID } = this.props;
        let matchWon = false;
        let matchClass = ['match'];
        let championData = null;
        if(this.state.person !== null){
            match.teams.forEach((team) => {
                if(team.teamId === this.state.person.teamId){
                    if(team.win !== 'Fail'){
                        matchWon = true;
                        matchClass.push('match-won');
                    }
                    else{
                        matchClass.push('match-lost');
                    }
                }
            })
            championData = <ChampionData champion = {this.state.champion} />
        }
        return(
            <div className = {matchClass.join(' ')}>
                 {championData}
            </div>
        )
    }
}
export default SummonerMatch;