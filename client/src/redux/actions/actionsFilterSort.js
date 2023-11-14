import { esUUID } from '../../helpers/filterUUID';

export const actionFetchTeams = () => {
	return async (dispatch) => {
		const data = await fetch('http://192.168.140.73:3001/teams');
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