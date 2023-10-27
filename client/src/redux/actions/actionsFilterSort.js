import { esUUID } from '../../helpers/filterUUID';

export const actionFetchTeams = () => {
	return async (dispatch) => {
		const data = await fetch('http://localhost:3001/teams');
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
export const actionAddTeam = (team) => {
	return {
		type: 'ADD_TEAM',
		payload: team,
	};
};
export const actionRemoveTeam = (team) => {
	return {
		type: 'REMOVE_TEAM',
		payload: team,
	};
};
export const actionAddOrigin = (origin) => {
	return {
		type: 'ADD_ORIGIN',
		payload: origin,
	};
};
export const actionRemoveOrigin = (origin) => {
	return {
		type: 'REMOVE_ORIGIN',
		payload: origin,
	};
};
export const actionSortAdd = (type) => {
	return {
		type: 'SORTS_ADD',
		payload: type,
	};
};
export const actionSortRemove = () => {
	return {
		type: 'SORTS_REMOVE'
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
