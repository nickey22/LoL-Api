import '../sass/partials/summoner-search.sass'
const SummonerSearch = ( props ) => {
    return(
        <div className = "summonerSearch">
            <form onSubmit = {props.searchSummoner} method = "POST">
                <input id = 'summonerNameSearch' type = 'text' name = 'summonerName' placeholder = 'Summoner to search' />
                <i className = 'fa fa-search'></i>
            </form>
        </div>
    )
}
export default SummonerSearch;