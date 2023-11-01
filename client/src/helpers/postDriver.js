export const postDriver = async (driver) => {
    const response = await fetch('http://localhost:3001/drivers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(driver),
    });
    const data = await response.json();
    return data;
}