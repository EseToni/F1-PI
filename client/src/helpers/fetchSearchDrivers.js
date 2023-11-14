
export const fetchSearchDrivers = async (input) => {
    const response = await fetch(`http://192.168.140.73:3001/drivers?name=${input}`);
    const drivers = await response.json();
    return drivers
 }