import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import SummonerSearch from '../components/SummonerSearch';
import Summoner from '../components/Summoner';
export default class Index extends React.Component{
    state = {
        currentSummoner: null
    }
    getSummonerByName = async (event) =>{
        this.setState({ currentSummoner: null});
        event.preventDefault();
        const summonerNameToGet = document.querySelector("#summonerNameSearch").value;
        const apiRequest = await fetch('/api/user/getSummonerByName',{
            method: 'POST',
            headers: {
                'Accept': 'application/js   on',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({summonerName: summonerNameToGet })
        })
        const apiResponse = await apiRequest.json();
        if(apiResponse.summoner.status){
            const statusCode = apiResponse.summoner.status.status_code;
            this.setState({ currentSummoner: null});
            alert(apiResponse.summoner.status.message);
        }else{
            this.setState({
                currentSummoner: apiResponse.summoner
            })
        }
    }


    render(){
        const summoner = this.state.currentSummoner;
        return(
            <Layout pageView = 'homepage' pageTitle = 'Homepage'>
                <SummonerSearch searchSummoner = {(event) => this.getSummonerByName(event)} />
                <Summoner summoner = {summoner} />
            </Layout>
        )
    }

}