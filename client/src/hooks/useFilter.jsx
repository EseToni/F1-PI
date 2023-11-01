import { useSelector, useDispatch } from 'react-redux';
import { actionFilterByTeam } from '../redux/actions/actionsFilterSort';
import {
	actionFetchSearchDrivers,
	actionRefreshDrivers,
	actionFetchAllDrivers,
} from '../redux/actions/actionsDrivers';
import { useEffect, useState } from 'react';
import {
	actionSort,
	actionFilterByOrigin,
} from '../redux/actions/actionsFilterSort';
import { actionIndexPage } from '../redux/actions/actionsPages';
import { isActive } from '../helpers/isFilterActive';

const useFilter = () => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const driversInmutable = useSelector(
		(state) => state.driverReducer.driversInmutable
	);
	const originFilterActive = useSelector(
		(state) => state.driverReducer.originFilterActive
	);
	const searchInput = useSelector((state) => state.driverReducer.searchInput);
	const orderSortActive = useSelector(
		(state) => state.driverReducer.orderSortActive
	);
	const teamsFilterActive = useSelector(
		(state) => state.driverReducer.teamsFilterActive
	);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				if (driversInmutable.length === 0) {
					await dispatch(actionFetchAllDrivers());
				}
				if (searchInput) {
					await dispatch(actionFetchSearchDrivers(searchInput)); //me aseguro de que la accion se ejecute antes de continuar
					dispatch(actionIndexPage());
				} else {
					await dispatch(actionRefreshDrivers());
				}
				if(isActive(teamsFilterActive)){
					dispatch(actionFilterByTeam());
					dispatch(actionIndexPage());
				}
				if (isActive(originFilterActive)) {
					dispatch(actionFilterByOrigin());
					dispatch(actionIndexPage());
				}
				if(isActive(orderSortActive)){
					dispatch(actionSort());
				}
				setTimeout(() => {
					setIsLoading(false);
				}, 1000);
			} catch (error) {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [
		dispatch,
		driversInmutable.length,
		searchInput,
		teamsFilterActive,
		originFilterActive,
		orderSortActive,
	]);

	return { isLoading };
};

export default useFilter;
