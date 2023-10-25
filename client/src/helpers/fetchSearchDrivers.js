
export const fetchSearchDrivers = async (input) => {
    const response = await fetch(`http://localhost:3001/drivers?name=${input}`);
    const drivers = await response.json();
    return drivers
 }