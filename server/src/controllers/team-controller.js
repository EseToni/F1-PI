const { getAllTeams } = require('../helpers/fetchApi');
const { Team } = require('../db.js');

class TeamController {
	static async getTeams() {
		const teams = await getAllTeams();
		await Promise.all(
			teams.map(async (teamName) => {
				const [team] = await Team.findOrCreate({ where: { name: teamName } });
				return team.name;
			})
		);
        const teamsDb = await Team.findAll();
		return teamsDb;
	}
}

module.exports = TeamController;
