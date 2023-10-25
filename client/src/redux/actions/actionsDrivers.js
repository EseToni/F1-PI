import { fetchAllDrivers } from '../../helpers/fetchAllDrivers';
import { fetchSearchDrivers } from '../../helpers/fetchSearchDrivers';
const requestData = () => {
	return {
		type: 'REQUEST_DATA',
	};
};
export const actionFetchAllDrivers = () => {
	return async (dispatch) => {
		dispatch(requestData());
		const drivers = await fetchAllDrivers();
		dispatch({
			type: 'DEFAULT_DRIVERS',
			payload: drivers,
		});
	};
};
export const actionFetchSearchDrivers = (input, teams) => {
	return async (dispatch) => {
		dispatch(requestData());
		var drivers = await fetchSearchDrivers(input);
		if (drivers.length > 0) {
			drivers = drivers.filter((driver) =>
				teams.every((team) => driver.teams?.includes(team))
			);
		}
		dispatch({
			type: 'FILTER_BY_NAME',
			payload: drivers,
		});
	};
};
export const actionSearchInput = (input) => {
	return {
		type: 'SEARCH_INPUT',
		payload: input,
	};
};
