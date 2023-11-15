import {URL} from '../constants/url.js'
export const fetchSearchDrivers = async (input) => {
    const response = await fetch(`${URL}/drivers?name=${input}`);
    const drivers = await response.json();
    return drivers
 }