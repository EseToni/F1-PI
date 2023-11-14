export const fetchAllDrivers = async () => {
    const data = await fetch('http://192.168.140.73:3001/drivers')
    const drivers = await data.json()
    return drivers
 }