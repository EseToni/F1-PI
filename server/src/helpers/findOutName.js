const { getDriversApi } = require('./fetchApi');

const findOutName = async (name, lastName) => {
	try {
		const drivers = await getDriversApi();
		const driver = drivers.find(
			(driver) =>
				driver.name.toLowerCase() === name.toLowerCase() &&
				driver.lastName.toLowerCase() === lastName.toLowerCase()
		);
		if (driver) return { error: 'El conductor ya existe' };
	} catch (error) {
		return null;
	}
};

module.exports = { findOutName };

