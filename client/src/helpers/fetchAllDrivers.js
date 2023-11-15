import { URL } from '../constants/url.js';

export const fetchAllDrivers = async () => {
	const data = await fetch(`${URL}/drivers`);
	const drivers = await data.json();
	return drivers;
};
