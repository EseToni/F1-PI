export const postDriver = async (driver) => {
    const response = await fetch('http://192.168.140.73:3001/drivers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(driver),
    });
    const data = await response.json();
    return data;
}