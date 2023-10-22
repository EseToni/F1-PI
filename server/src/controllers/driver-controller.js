const { Driver, Team } = require('../db.js');
const { Op } = require('sequelize');
const fs = require('node:fs/promises');
const { getDriversApi, UUIDVALID } = require('../helpers/fetchApi.js');

class DriverController {
	constructor() {}
	static async getDrivers() {
		try {
			const driversApi = await getDriversApi();
			const driversDb = await Driver.findAll();
			const drivers = driversApi.concat(driversDb);
			return drivers;
		} catch (error) {
			return { error: error.message };
		}
	}

	static async getDriverById(idDriver) {
		try {
			const driverApi = await getDriversApi(idDriver);
			if (driverApi) {
				return driverApi;
			}
			if (!UUIDVALID(idDriver)) {
				return { error: 'No se encontró el conductor' };
			}
			const driverDb = await Driver.findByPk(idDriver, { include: Team });
			if (driverDb) {
				return driverDb;
			}
			return { error: 'No se encontró el conductor' };
		} catch (error) {
			return { error: error.message };
		}
	}

	static async getDriversByName(name) {
		try {
			const driversApi = await getDriversApi(null, name);
			if (driversApi.length >= 15) return driversApi.slice(0, 15);

			const driversDb = await Driver.findAll({
				where: {
					name: {
						[Op.iLike]: `%${name}%`,
					},
				},
			});
			const drivers = driversApi.concat(driversDb);
			if (drivers.length === 0)
				return { error: 'No se encontraron resultados' };

			return drivers.slice(0, 15);
		} catch (error) {
			return { error: error.message };
		}
	}

	static async postDrivers(driver) {
		try {
			const teams = await Promise.all(
				driver.team.map(async (team) => {
					const [newTeam] = await Team.findOrCreate({ where: { name: team } }); //Buscamos o creamos el equipo, y utilizamos los corchetes para
					return newTeam;                                                      //coger el primer valor que devuelve findOrCreate [team, boolean]
				})
			);

			const newDriver = await Driver.create(driver);
			// Establece la relación entre el conductor y los equipos
			await newDriver.addTeams(teams);

			return newDriver;
		} catch (error) {
			return { error: error.message };
		}
	}
}

module.exports = DriverController;
