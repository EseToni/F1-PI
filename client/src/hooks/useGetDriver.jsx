import { useEffect, useState } from 'react';

const useGetDriver = ({ driverId }) => {
	const [driver, setDriver] = useState({});
	useEffect(() => {
		const getDriver = async () => {
            const data = await fetch(`http://localhost:3001/drivers/${driverId}`);
            const driver = await data.json();
            setDriver(driver);
		};
		getDriver();
	}, [driverId]);
	return driver;
};

export default useGetDriver;
