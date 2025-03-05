import { Router } from 'express';
import { getTeam, getTeamCoaches, getTeamLeaders, getTeamPersonnel, getTeamRoster } from '../data/team.js';
import { getPlayer } from '../data/player.js';
import { checkID } from '../helpers.js';
import { getStandings } from '../data/standings.js';

const router = Router();

//team routes
router.route('/team/:id').get(async (req, res) => {
        let id = req.params.id;
        try{
            id = checkID(id, 'teamID');
        } catch(e){
            return res.status(400).json({error: "Invalid team ID format."});
        }
        try{
            const team = await getTeam(id);
            if(!team){
                return res.status(404).json({error: "Team not found"});
            }
            res.status(200).json(team);
        } catch(e){
            return res.status(500).json({error: "An error occured while retrieving the team data."});
        }
});

router.route('/team/:id/roster').get(async (req, res) => {
    let id = req.params.id;
    try{
        id = checkID(id, 'teamId');
    } catch(e){
        return res.status(400).json({error: 'Invalid team ID format'});
    }
    try{
        const teamRoster = await getTeamRoster(id);
        if(!teamRoster){
            return res.status(404).json({error: "Team not found"});
        }
        res.status(200).json(teamRoster);
    } catch(e){
        return res.status(500).json({error: "An error occured while retrieving the team roster"});
    }
});

router.route('/team/:id/coaches').get(async (req, res) => {
    let id = req.params.id;
    try{
        id = checkID(id, 'teamId');
    } catch(e){
        return res.status(400).json({error: 'Invalid team ID format'});
    }
    try{
        const teamHistory = await getTeamCoaches(id);
        if(!teamHistory){
            return res.status(404).json({error: "Team not found"});
        }
        res.status(200).json(teamHistory);
    } catch(e){
        return res.status(500).json({error: "An error occured while retrieving the team coaches"});
    }
});

router.route('/team/:id/leaders').get(async (req, res) => {
    let id = req.params.id;
    try{
        id = checkID(id, 'teamId');
    } catch(e){
        return res.status(400).json({error: 'Invalid team ID format'});
    }
    try{
        const teamLeaders = await getTeamLeaders(id);
        if(!teamLeaders){
            return res.status(404).json({error: "Team not found"});
        }
        res.status(200).json(teamLeaders);
    } catch(e){
        return res.status(500).json({error: "An error occured while retrieving the team leaders"});
    }
});

router.route('/team/:id/personnel').get(async (req, res) => {
    let id = req.params.id;
    try{
        id = checkID(id, 'teamId');
    } catch(e){
        return res.status(400).json({error: 'Invalid team ID format'});
    }
    try{
        const teamPersonnel = await getTeamPersonnel(id);
        if(!teamPersonnel){
            return res.status(404).json({error: "Team not found"});
        }
        res.status(200).json(teamPersonnel);
    } catch(e){
        return res.status(500).json({error: "An error occured while retrieving the team leaders"});
    }
});

//player routes
router.route('/player/:id').get(async (req, res) => {
    let id = req.params.id;
    try{
        id = checkID(id, 'playerId');
    } catch(e){
        return res.status(400).json({error: 'Invalid player ID format'});
    }
    try{
        const player = await getPlayer(id);
        if(!player){
            return res.status(404).json({error: "Player not found"});
        }
        res.status(200).json(player);
    } catch(e){
        return res.status(500).json({error: "An error occured while retrieving player data"});
    }
});

//standings route
router.route('/standings').get(async (req, res) => {
    try{
        const standings = await getStandings();
        if(!standings){
            return res.status(400).json({error: "An error occured while retrieving standings"});
        }
        res.status(200).json(standings);
    } catch(e){
        return res.status(500).json({error: "An error occured while retrieving standings"});
    }
});

export default router;
