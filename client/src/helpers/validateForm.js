export function isURLValid(url) {
	// Expresión regular para validar una URL
	const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

	return regex.test(url);
}
export const isError = (errors) => {
	return Object.values(errors).some((error) => error !== '');
}
export const validateForm = ({
	name,
	lastName,
	nationality,
	dateOfBirth,
	teams,
	image,
	description,
}) => {
	let errors = {};
	if (!name) {
		errors.name = 'El nombre es requerido';
	} else if (name.length < 3 || name.length > 20) {
		errors.name = 'El nombre debe tener entre 3 y 20 caracteres';
	} else {
		errors.name = '';
	}
	if (!lastName) {
		errors.lastName = 'El apellido es requerido';
	} else if (lastName.length < 3 || lastName.length > 20) {
		errors.lastName = 'El apellido debe tener entre 3 y 20 caracteres';
	} else {
		errors.lastName = '';
	}
	if (!nationality) {
		errors.nationality = 'La nacionalidad es requerida';
	} else if (nationality.length < 3 || nationality.length > 20) {
		errors.nationality = 'La nacionalidad debe tener entre 3 y 20 caracteres';
	} else {
		errors.nationality = '';
	}
    const date = new Date(dateOfBirth)
	if (!(date instanceof Date) || isNaN(date)) {
		errors.dateOfBirth = 'La fecha de nacimiento debe ser una fecha';
	} else {
		const year = date.getFullYear();
		if (year < 1920 || year > 2013 ) {
			errors.dateOfBirth =
				'La fecha de nacimiento debe estar entre 1920 y 2013';
		} else {
			errors.dateOfBirth = '';
		}
	}
	if (teams.length < 1 || teams[0] === '') {
		errors.teams = 'Debe tener minimo una escuderia';
	} else if (teams.length > 10) {
		errors.teams = 'No puede tener mas de 10 escuderias';
	} else if (teams.some((team) => team.length < 3 || team.length > 20)) {
		errors.teams = 'Las escuderias deben tener entre 3 y 20 caracteres';
	}
	else {
		errors.teams = '';
	}
	if (!isURLValid(image)) {
		errors.image = 'La imagen debe ser una url';
	} else {
		errors.image = '';
	}
	if (!description) {
		errors.description = 'La descripción es necesaria';
	} else if (description.length < 20 || description.length > 500) {
		errors.description = 'La descripción debe tener entre 20 y 500 caracteres';
	} else {
		errors.description = '';
	}
	return errors;
};
