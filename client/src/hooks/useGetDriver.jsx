import { useEffect, useState } from 'react';
import { URL } from '../constants/url';
const useGetDriver = ({ driverId }) => {
	const [driver, setDriver] = useState({});
	useEffect(() => {
		const getDriver = async () => {
            const data = await fetch(`${URL}/drivers/${driverId}`);
            const driver = await data.json();
            setDriver(driver);
		};
		getDriver();
	}, [driverId]);
	return driver;
};

export default useGetDriver;
