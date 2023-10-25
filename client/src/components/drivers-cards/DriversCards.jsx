import { useSelector, useDispatch } from 'react-redux';
import DriverCard from '../driver-card/DriverCard';
import { useEffect, useMemo, useState, useCallback } from 'react';
import styles from './styles.module.css';
import usePagination from '../../hooks/usePagination';
import { useTheme } from '../../theme/ThemeProvider';
import {
	actionFetchAllDrivers,
	actionFetchSearchDrivers,
} from '../../redux/actions/actionsDrivers';
import { actionFilterByTeam } from '../../redux/actions/actionsFilterSort';
import { actionIndexPage } from '../../redux/actions/actionsPages';
import PaginateButtom from '../paginate-buttom/PaginateButtom';

const DriversCards = () => {
	const { startIndex, endIndex } = usePagination();
	const allCards = useSelector((state) => state.driverReducer.drivers);
	const driversInmutable = useSelector((state) => state.driverReducer.driversInmutable);
	const searchInput = useSelector((state) => state.driverReducer.searchInput);
	const teamsFilter = useSelector((state) => state.driverReducer.teamsFilter);
	const update = useSelector((state) => state.driverReducer.update);
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const { isDarkMode } = useTheme();

	// dispatch(actionFetchAllDrivers());
	const fetchDrivers = useCallback(() => {
		if (searchInput) {
			dispatch(actionFetchSearchDrivers(searchInput, teamsFilter));
			dispatch(actionIndexPage());
		} else {
			dispatch(actionFilterByTeam());
		}
	}, [dispatch, searchInput, teamsFilter]);

	useEffect(() => {
		if(driversInmutable.length === 0){dispatch(actionFetchAllDrivers());}
		fetchDrivers();
	}, [fetchDrivers, dispatch, driversInmutable.length]);

	const memoizedDrivers = useMemo(() => {
		if (allCards.length > 0) {
			setError(false);
			return allCards.slice(startIndex, endIndex);
		} else {
			setError(true);
			return [];
		}
	}, [allCards, startIndex, endIndex, update]);

	const memoizedDriverCards = useMemo(() => {
		//usamos useMemo para que no se renderize cada vez que cambia el estado
		return memoizedDrivers.map((driver) => (
			<DriverCard
				key={driver.id}
				id={driver.id}
				name={driver.name}
				lastname={driver.lastname}
				image={driver.image}
				teams={driver.teams}
				isDarkMode={isDarkMode}
			/>
		));
	}, [memoizedDrivers, isDarkMode]);

	return (
		<>
			{error ? (
				<div className={`${styles.containerError}`}>
					<h1 className={`${styles.error}`}>No se encontraron resultados</h1>
				</div>
			) : (
				<div className={`${styles.containerGrid}`}>
					{memoizedDriverCards}
					<PaginateButtom />
				</div>
			)}
		</>
	);
};

export default DriversCards;
