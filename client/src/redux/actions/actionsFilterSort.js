import { esUUID } from '../../helpers/filterUUID';
import { URL } from '../../constants/url';
export const actionFetchTeams = () => {
	return async (dispatch) => {
		const data = await fetch(`${URL}/teams`);
		const teams = await data.json();
		dispatch({
			type: 'GET_TEAMS',
			payload: teams,
		});
	};
};
export const actionFilterByTeam = () => {
	return {
		type: 'FILTER_BY_TEAM',
	};
};
export const actionFilterByOrigin = () => {
	return {
		type: 'FILTER_BY_ORIGIN',
		payload: esUUID,
	};
};
export const actionSort = () => {
	return {
		type: 'SORTS_FILTER',
	};
};
export const actionActiveTeams = (active) => {
	return {
		type: 'ACTIVE_TEAMS',
		payload: active,
	};
};
export const actionActiveOrigin = (active) => {
	return {
		type: 'ACTIVE_ORIGIN',
		payload: active,
	};
}
export const actionActiveSort = (active) => {
	return {
		type: 'ACTIVE_ORDER_SORT',
		payload: active,
	};
}