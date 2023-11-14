import { useSelector } from 'react-redux';
import DriverCard from '../driver-card/DriverCard';
import { useMemo, useState } from 'react';
import styles from './styles.module.css';
import usePagination from '../../hooks/usePagination';
import { useTheme } from '../../theme/ThemeProvider';
import PaginateBottom from '../paginate-bottom/PaginateBottom';
import useFilter from '../../hooks/useFilter';
import SkeletonCard from '../skeleton-card/SkeletonCard';
import { SKELETON_CARDS } from '../../constants/skeletonCards';

const MapDrivers = () => {
	const drivers = useSelector((state) => state.driverReducer.drivers);
	const [error, setError] = useState(false);
	const { isDarkMode } = useTheme();
	const { isLoading } = useFilter();
	const { startIndex, endIndex } = usePagination();

	const memoizedDrivers = useMemo(() => {
		if (drivers.length > 0) {
			setError(false);
			return drivers.slice(startIndex, endIndex);
		} else {
			setError(true);
			return [];
		}
	}, [drivers, startIndex, endIndex]);

	const memoizedDriverCards = useMemo(() => {
		//usamos useMemo para que no se renderize cada vez que cambia el estado
		return memoizedDrivers.map((driver) => (
			<DriverCard
				key={driver.id}
				id={driver.id}
				name={driver.name}
				lastName={driver.lastName}
				image={driver.image}
				teams={driver.teams}
				isDarkMode={isDarkMode}
			/>
		));
	}, [memoizedDrivers, isDarkMode]);

	return (
		<>
			{isLoading ? (
				<div className={`${styles.containerGrid}`}>
					{SKELETON_CARDS.map((key) => <SkeletonCard key={key} isDarkMode={isDarkMode}/>)}
					<PaginateBottom isDarkMode={isDarkMode}/>
				</div>
			) : error ? (
				<div className={`${styles.containerError}`}>
					<h1 className={`${styles.error}`}>No se encontraron resultados</h1>
				</div>
			) : (
				<div className={`${styles.containerGrid}`}>
					{memoizedDriverCards}
					<PaginateBottom isDarkMode={isDarkMode}/>
				</div>
			)}
		</>
	);
};

export default MapDrivers;
