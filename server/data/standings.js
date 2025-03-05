import MLBStatsAPI from 'mlb-stats-api';
const mlbStats = new MLBStatsAPI();

export const getStandings = async () => {
    const response = await mlbStats.getStandings();
    if(!response){
        throw `Error getting standings`;
    }
    const data = await response.json();
    return data;
}