import {
	sortAZ,
	sortZA,
	sortAgeASC,
	sortAgeDESC,
	sortByID,
} from '../../helpers/sortersFunc';

const initialState = {
	driversInmutable: [],
	drivers: [],
	searchInput: '',
	teams: [],
	teamsFilter: [],
	originFilter: '',
	sortsFilter: '',
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'DEFAULT_DRIVERS':
			return {
				...state,
				driversInmutable: payload,
				drivers: payload,
			};
		case 'REFRESH_DRIVERS':
			return {
				...state,
				drivers: [...state.driversInmutable]
			};
		case 'FILTER_BY_NAME':
			return {
				...state,
				drivers: payload
			};
		case 'SEARCH_INPUT':
			return {
				...state,
				searchInput: payload,
			};
		case 'GET_TEAMS':
			return {
				...state,
				teams: payload
			};
		case 'ADD_TEAM':
			return {
				...state,
				teamsFilter: [...state.teamsFilter, payload],
			};
		case 'REMOVE_TEAM':
			return {
				...state,
				teamsFilter: state.teamsFilter.filter((team) => team !== payload),
			};
		case 'FILTER_BY_TEAM':
			return {
				...state,
				drivers: state.drivers.filter((driver) =>
					state.teamsFilter.every((team) => driver.teams?.includes(team))
				),
			};
		case 'ADD_ORIGIN':
			return {
				...state,
				originFilter: payload,
			};
		case 'REMOVE_ORIGIN':
			return {
				...state,
				originFilter: '',
			};
		case 'SORTS_ADD':
			return {
				...state,
				sortsFilter: payload,
			};
		case 'SORTS_REMOVE':
			return {
				...state,
				sortsFilter: '',
			};
		case 'SORTS_FILTER':
			var sortedDrivers = [...state.drivers];
			if (state.sortsFilter === 'AZ') {
				sortedDrivers = sortAZ(state.drivers);
			} else if (state.sortsFilter === 'ZA') {
				sortedDrivers = sortZA(state.drivers);
			} else if (state.sortsFilter === 'AGE_ASC') {
				sortedDrivers = sortAgeASC(state.drivers);
			} else if (state.sortsFilter === 'AGE_DESC') {
				sortedDrivers = sortAgeDESC(state.drivers);
			}
			return {
				...state,
				drivers: sortedDrivers,
			};
		case 'FILTER_BY_ORIGIN':
			var filterDrivers = [...state.drivers];
			if (state.originFilter === 'Pilotos originales') {
				filterDrivers = state.drivers.filter((driver) => !payload(driver.id));
			} else if (state.originFilter === 'Hechos por fans') {
				filterDrivers = state.drivers.filter((driver) => payload(driver.id));
			}
			return {
				...state,
				drivers: filterDrivers,
			};
		default:
			return state;
	}
};

export default rootReducer;
