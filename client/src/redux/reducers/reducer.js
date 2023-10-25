const initialState = {
	isLoading: false,
	driversInmutable: [],
	drivers: [],
	searchInput: '',
	teams: [],
	teamsFilter: [],
	originFilter: [],
	sortFilter: [],
	update: false,
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'REQUEST_DATA':
			return {
				...state,
				isLoading: true,
			};
		case 'DEFAULT_DRIVERS':
			return {
				...state,
				driversInmutable: payload,
				drivers: payload,
				isLoading: false,
			};
		case 'FILTER_BY_NAME':
			return {
				...state,
				drivers: payload,
				isLoading: false,
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
				isLoading: false,
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
				drivers: state.driversInmutable.filter((driver) =>
					state.teamsFilter.every((team) => driver.teams?.includes(team))
				),
				isLoading: false,
			};
		case 'ADD_ORIGIN':
			return {
				...state,
				originFilter: [...state.originFilter, payload],
			};
		case 'REMOVE_ORIGIN':
			return {
				...state,
				originFilter: state.originFilter.filter((origin) => origin !== payload),
			};
		case 'FILTER_BY_ORIGIN':
			return {
				...state,
				drivers:
					state.originFilter[0] === 'Pilotos originales'
						? state.drivers.filter((driver) => !payload(driver.id))
						: state.originFilter[0] === 'Hechos por fans'
						? state.drivers.filter((driver) => payload(driver.id))
						: state.driversInmutable,
			};
		case 'SORT_ADD':
			return {
				...state,
				sortFilter: [...state.sortFilter, payload],
			};
		case 'SORT_REMOVE':
			return {
				...state,
				sortFilter: state.sortFilter.filter((sort) => sort !== payload),
			};
		case 'SORT_NAME_ASC':
			if (state.sortFilter.includes('A - Z')) {
				const sortedDrivers = [...state.drivers].sort((a, b) => {
					const nameA = a.name.toLowerCase();
					const nameB = b.name.toLowerCase();
					if (nameA < nameB) {
						return -1;
					}
					if (nameA > nameB) {
						return 1;
					}
					return 0;
				});
				return {
					...state,
					drivers: sortedDrivers,
					isLoading: false,
					update: !state.update,
				};
			} else {
				return {
					...state,
					drivers: [...state.driversInmutable], // Usar una copia de driversInmutable
					update: !state.update,
				};
			}
		case 'SORT_NAME_DESC':
			if (state.sortFilter.includes('Z - A')) {
				const sortedDrivers = [...state.drivers].sort((a, b) => {
					const nameA = a.name.toLowerCase();
					const nameB = b.name.toLowerCase();
					if (nameA > nameB) {
						return -1;
					}
					if (nameA < nameB) {
						return 1;
					}
					return 0;
				});
				return {
					...state,
					drivers: sortedDrivers,
					isLoading: false,
					update: !state.update,
				};
			} else {
				return {
					...state,
					drivers: [...state.driversInmutable],
					update: !state.update,
				};
			}
		case 'SORT_AGE_ASC':
			if (state.sortFilter.includes('Edad ascendente')) {
				const sortedDrivers = [...state.drivers].sort((a, b) => {
					// Parsea las fechas de nacimiento y compáralas
					const dateA = new Date(a.dateOfBirth);
					const dateB = new Date(b.dateOfBirth);

					if (dateA < dateB) {
						return -1;
					}
					if (dateA > dateB) {
						return 1;
					}
					return 0;
				});
				return {
					...state,
					drivers: sortedDrivers,
					isLoading: false,
					update: !state.update,
				};
			} else {
				return {
					...state,
					drivers: [...state.driversInmutable], // Usar una copia de driversInmutable
					update: !state.update,
				};
			}
		case 'SORT_AGE_DESC':
			if (state.sortFilter.includes('Edad descendente')) {
				const sortedDrivers = [...state.drivers].sort((a, b) => {
					// Parsea las fechas de nacimiento y compáralas en orden descendente
					const dateA = new Date(a.dateOfBirth);
					const dateB = new Date(b.dateOfBirth);

					if (dateA > dateB) {
						return -1;
					}
					if (dateA < dateB) {
						return 1;
					}
					return 0;
				});
				return {
					...state,
					drivers: sortedDrivers,
					isLoading: false,
					update: !state.update,
				};
			} else {
				return {
					...state,
					drivers: [...state.driversInmutable], // Usar una copia de driversInmutable
					update: !state.update,
				};
			}

		default:
			return state;
	}
};

export default rootReducer;
