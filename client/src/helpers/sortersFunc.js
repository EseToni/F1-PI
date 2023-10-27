export const sortAZ = (array) => {
	const sortedDrivers = [...array].sort((a, b) => {
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
	return sortedDrivers;
};

export const sortZA = (array) => {
	const sortedDrivers = [...array].sort((a, b) => {
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
	return sortedDrivers;
};

export const sortAgeASC = (array) => {
	const sortedDrivers = [...array].sort((a, b) => {
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
	return sortedDrivers;
};

export const sortAgeDESC = (array) => {
	const sortedDrivers = [...array].sort((a, b) => {
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
	return sortedDrivers;
};

export const sortByID = (array) => {
    const sortedDrivers = [...array].sort((a, b) => a.id - b.id);
    return sortedDrivers;
  };