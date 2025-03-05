import MLBStatsAPI from 'mlb-stats-api';
const mlbStats = new MLBStatsAPI();
import {checkID} from '../helpers.js';


export const getTeam = async (teamId) => {
    if(teamId === undefined){
        throw `Error: teamID must be supplied`;
    }
    
    teamId = checkID(teamId, "teamID");
    const response = await mlbStats.getTeam({pathParams: {teamId: parseInt(teamId)}});
    if(response.status === 404){
        throw "No team found with that id";
    }
    
    const data = await response.json();
    if(!data){
        throw `No data for team with id ${teamId}`
    }
    return data;
    
};

export const getTeamRoster = async (teamId) => {
    if(teamId === undefined){
        throw `Error: teamID must be supplied`;
    }
    
    teamId = checkID(teamId, "teamID");
    const response = await mlbStats.getTeamRoster({pathParams: {teamId: parseInt(teamId)}});
    const data = await response.json();
    if(!data){
        throw `No data for team with id ${teamId}`;
    }
    return data;
};

export const getTeamCoaches = async (teamId) => {
    if(teamId === undefined){
        throw `Error: teamID must be supplied`;
    }
    
    teamId = checkID(teamId, "teamID");
    const response = await mlbStats.getTeamCoaches({pathParams: {teamId: parseInt(teamId)}});
    const data = await response.json();
    if(!data){
        throw `No data for team with id ${teamId}`;
    }
    return data;
};

export const getTeamLeaders = async (teamId) => {
    if(teamId === undefined){
        throw `Error: teamID must be supplied`;
    }
    
    teamId = checkID(teamId, "teamID");
    const response = await mlbStats.getTeamLeaders({pathParams: {teamId: parseInt(teamId)}});
    const data = await response.json();
    if(!data){
        throw `No data for team with id ${teamId}`;
    }
    return data;
};

export const getTeamPersonnel = async (teamId) => {
    if(teamId === undefined){
        throw `Error: teamID must be supplied`;
    }
    
    teamId = checkID(teamId, "teamID");
    const response = await mlbStats.getTeamPersonnel({pathParams: {teamId: parseInt(teamId)}});
    const data = await response.json();
    if(!data){
        throw `No data for team with id ${teamId}`;
    }
    return data;
}