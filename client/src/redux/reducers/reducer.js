import {
	sortAZ,
	sortZA,
	sortAgeASC,
	sortAgeDESC,
	filerByTeam,
} from '../../helpers/sortersFunc';
const initialState = {
	driversInmutable: [],
	drivers: [],
	searchInput: '',
	teams: [],
	teamsFilter: [],
	originFilter: '',
	sortsFilter: '',
	teamsFilterActive: {},
	originFilterActive: {},
	orderSortActive : {},
	alert: true,
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
				drivers: [...state.driversInmutable],
			};
		case 'FILTER_BY_NAME':
			return {
				...state,
				drivers: payload,
			};
		case 'SEARCH_INPUT':
			return {
				...state,
				searchInput: payload,
			};
		case 'GET_TEAMS':
			return {
				...state,
				teams: payload,
			};
		case 'FILTER_BY_TEAM':
				return {
					...state,
					drivers: filerByTeam(state.drivers,state.teamsFilterActive),
				};
		case 'SORTS_FILTER':
			var sortedDrivers = [...state.drivers];
			if (state.orderSortActive['AZ']) {
				sortedDrivers = sortAZ(state.drivers);
			} else if (state.orderSortActive['ZA']) {
				sortedDrivers = sortZA(state.drivers);
			} else if (state.orderSortActive['AGE_ASC']) {
				sortedDrivers = sortAgeASC(state.drivers);
			} else if (state.orderSortActive['AGE_DESC']) {
				sortedDrivers = sortAgeDESC(state.drivers);
			}
			return {
				...state,
				drivers: sortedDrivers,
			};
		case 'FILTER_BY_ORIGIN':
			var filterDrivers = [...state.drivers];
			if (state.originFilterActive['Pilotos originales']) {
				filterDrivers = state.drivers.filter((driver) => !payload(driver.id));
			} else if (state.originFilterActive['Hechos por fans']) {
				filterDrivers = state.drivers.filter((driver) => payload(driver.id));
			}
			return {
				...state,
				drivers: filterDrivers,
			};
		case 'ACTIVE_TEAMS':
			return {
				...state,
				teamsFilterActive: {
					...state.teamsFilterActive,
					[payload.name]: payload.active,
				},
			};
		case 'ACTIVE_ORIGIN':
			return {
				...state,
				originFilterActive: {
					...state.originFilterActive,
					[payload.name]: payload.active,
				},
			}
		case 'ACTIVE_ORDER_SORT':
			return {
				...state,
				orderSortActive: {
					...state.orderSortActive,
					[payload.name]: payload.active,
				},
			}
		case 'ALERT_OFF':
			return{
				...state,
				alert : false
			}
		default:
			return state;
	}
};

export default rootReducer;
