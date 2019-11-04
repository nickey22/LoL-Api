import React from 'react';
import itemData from '../../../../../static/ddragon/db/item.json'
const ChampionItems = ( props ) => {
    const { stats } = props;
    const items = [stats.item0,stats.item1,stats.item2,stats.item3,stats.item4,stats.item5]
    const itemsJSON = itemData.data;
    return(
        <div className = 'panel items'>
            <div className = 'items-wrapper'>
                {items.map((item,index) => {
                    return(
                        <div className = 'item' key = {index}>
                            {
                            item === 0 ? 
                            null 
                            : 
                            <img src = {`/static/ddragon/img/item/${itemsJSON[item].image.full}`} alt = 'item' />
                            }
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ChampionItems;