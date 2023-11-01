const axios = require('axios');

const getDriversApi = async (id, name) => {
	let URL = `http://localhost:5000/drivers`;
	if (id) {
		URL += `/${id}`;
	}
	// if (name) {
	// 	name = name.trim().charAt(0).toUpperCase() + name.slice(1);
	// 	URL += `?name.forename=${name}`;
	// }
	try {
		const { data } = await axios.get(URL);
		if (id) {
			if (data.image.url.length === 0) {
				data.image.url =
					'https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png';
			}
			return {
				id: data.id,
				name: data.name.forename,
				lastName: data.name.surname,
				image: data.image.url,
				description: data.description,
				nationality: data.nationality,
				dateOfBirth: data.dob,
				teams: data.teams?.split(','),
			};
		}
		var drivers = data.map((driver) => {
			if (driver.image.url.length === 0) {
				driver.image.url =
					'https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png';
			}
			return {
				id: driver.id,
				name: driver.name.forename,
				lastName: driver.name.surname,
				image: driver.image.url,
				description: driver.description,
				nationality: driver.nationality,
				dateOfBirth: driver.dob,
				teams: driver.teams?.split(','),
			};
		});
		if (name) {
			drivers = drivers.filter((driver) => {
				return driver.name.toLowerCase().includes(name.toLowerCase());
			});
		}
		return drivers;
	} catch (error) {
		console.log({ error: error.message });
	}
};

const getAllTeams = async () => {
	const drivers = await getDriversApi();
	const teams = new Set();
	const teamsArray = [];
	drivers.forEach((driver) => {
		if (!driver.teams) {
			return;
		}
		if (driver.teams) {
			driver.teams.forEach((team) => {
				teams.add(team);
			});
		}
	});
	teams.forEach((team) => {
		teamsArray.push(team);
	});
	return teamsArray;
};

const UUIDVALID = (uuid) => {
	const uuidPattern =
		/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
	return uuidPattern.test(uuid);
};
module.exports = { getDriversApi, UUIDVALID, getAllTeams };
