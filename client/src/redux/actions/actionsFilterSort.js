const requestData = () => {
	return {
		type: 'REQUEST_DATA',
	};
};
import { esUUID } from '../../helpers/filterUUID';

export const actionFetchTeams = () => {
	return async (dispatch) => {
		dispatch(requestData());
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
export const actionFilterByOrigin = () => {
	return {
		type: 'FILTER_BY_ORIGIN',
		payload: esUUID,
	};
};
export const actionSortAdd = (type) => {
	return {
		type: 'SORT_ADD',
		payload: type,
	};
};
export const actionSortRemove = (type) => {
	return {
		type: 'SORT_REMOVE',
		payload: type,
	};
};
export const actionSortNameAsc = () => {
	return {
		type: 'SORT_NAME_ASC',
	};
};
export const actionSortNameDesc = () => {
	return {
		type: 'SORT_NAME_DESC',
	};
};
export const actionSortAgeAsc = () => {
	return {
		type: 'SORT_AGE_ASC',
	};
};
export const actionSortAgeDesc = () => {
	return {
		type: 'SORT_AGE_DESC',
	};
};
