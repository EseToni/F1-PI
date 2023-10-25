export const fetchAllDrivers = async () => {
    const data = await fetch('http://localhost:3001/drivers')
    const drivers = await data.json()
    return drivers
 }