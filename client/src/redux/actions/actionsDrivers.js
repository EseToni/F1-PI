import { fetchAllDrivers } from '../../helpers/fetchAllDrivers';
import { fetchSearchDrivers } from '../../helpers/fetchSearchDrivers';

export const actionFetchAllDrivers = () => {
	return async (dispatch) => {
		const drivers = await fetchAllDrivers();
		dispatch({
			type: 'DEFAULT_DRIVERS',
			payload: drivers,
		});
	};
};
export const actionFetchSearchDrivers = (input) => {
	return async (dispatch) => {
		const drivers = await fetchSearchDrivers(input);
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
export const actionRefreshDrivers = () => {
	return {
		type: 'REFRESH_DRIVERS'
	}
}

export const actionNextDriverDetail = (id) => {
	return {
		type: 'NEXT_DRIVER_DETAIL',
		payload: id
	}
}
export const actionPrevDriverDetail = (id) => {
	return {
		type: 'PREV_DRIVER_DETAIL',
		payload: id
	}
}