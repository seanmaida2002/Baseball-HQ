import MLBStatsAPI from 'mlb-stats-api';
const mlbStats = new MLBStatsAPI();
import {checkID} from '../helpers.js';

export const getPlayer = async (playerId) => {
    if(playerId === undefined){
        throw `Error: teamID must be supplied`;
    }
    
    playerId = checkID(playerId, "playerId");
    const response = await mlbStats.getPerson({pathParams: {personId: parseInt(playerId)}});
    if(response.status === 404){
        throw "No player found with that id";
    }
    const data = await response.json();
    if(!data){
        throw `No data for player with id ${playerId}`
    }
    return data;
};