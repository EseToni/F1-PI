const axios = require('axios');

const getDriversApi = async (id, name) => {
	let URL = `http://localhost:5000/drivers`;
	let drivers;
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
				return data;
			}
			return data;
		}
		if (name) {
			drivers = data.filter((driver) => {
				return driver.name.forename.toLowerCase().includes(name.toLowerCase());
			});
		} 
		else if (!name) {     
			console.log('----------------> entro');
			drivers = data;          //bug here  <----------------------------------- 
		}
		drivers = drivers.map((driver) => {
			if (driver.image.url.length === 0) {
				driver.image.url =
					'https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png';
				return driver;
			}
			return driver;
		});
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
		if (driver.teams.includes(',')) {
			driver.teams.split(',').forEach((team) => {
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
