import { URL } from "../constants/url";

export const postDriver = async (driver) => {
    const response = await fetch(`${URL}/drivers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(driver),
    });
    const data = await response.json();
    return data;
}