const fetch = require('isomorphic-unfetch')
const APIKey = 'RGAPI-379548c7-a482-4878-afe8-902bd756bb6c';

exports.getSummonerByName = async (req,res,next) => {
    const { summonerName } = req.body;
    const request = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,{
        headers: {
            "X-Riot-Token": APIKey
        }
    });
    const response = await request.json();
    req.summonerNameResponse = response;
    req.accountID = response.accountId;
    next();
}
exports.getSummonerMatches = async (req,res,next) => {
    const request = await fetch(`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${req.accountID}?endIndex=2`,{
        headers: {
            "X-Riot-Token": APIKey
        }
    });
    const response = await request.json();
    req.summonerGetAllMatches = response;
    next();
}

exports.getEachMatch = async (req,res) => {
    let fullMatchList = [];
    for(match of req.summonerGetAllMatches.matches){
        const matchID = match.gameId;
        const request = await fetch(`https://na1.api.riotgames.com/lol/match/v4/matches/${matchID}`,{
            headers: {
                "X-Riot-Token": APIKey
            }
        });
        const response = await request.json();
        fullMatchList.push(response);
    }

    res.json({
        summoner: {
            ...req.summonerNameResponse,
            matches: fullMatchList
        }
    })
}