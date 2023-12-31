import styles from './styles.module.css';
import { actionCreateDriver } from '../../redux/actions/actionForm';
import { useSelector, useDispatch } from 'react-redux';
import ListTeams from './ListTeams';
import useErrorsForm from '../../hooks/useErrorsForm';
import { postDriver } from '../../helpers/postDriver';
import { isError } from '../../helpers/validateForm';
import { useState,useRef} from 'react';
import { actionFetchAllDrivers } from '../../redux/actions/actionsDrivers';
import { actionFetchTeams } from '../../redux/actions/actionsFilterSort';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeProvider';

const FormDriver = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const createDriver = useSelector((state) => state.formReducer.createDriver);
	const errorsForm = useErrorsForm();
	const [status, setStatus] = useState(false);
	const [message, setMessage] = useState('');
	const { isDarkMode } = useTheme();
	const inputRef = useRef(null);
	const classGradient = isDarkMode
		? styles.darkGradient
		: styles.normalGradient;

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch(actionCreateDriver({ name: name, value: value }));
	};

	const handleOnSubmit = async () => {
		event.preventDefault();
		if (isError(errorsForm)) {
			setStatus(true);
			setMessage('Error en el formulario');
			setTimeout(() => {
				setStatus(false);
				setMessage('');
			}, 3000);
		} else {
			const driver = await postDriver(createDriver);
			if (driver.error) {
				setStatus(true);
				setMessage(driver.error);
				setTimeout(() => {
					setStatus(false);
					setMessage('');
				}, 3000);
			} else {
				setStatus(true);
				setMessage('Piloto creado correctamente, redireccionando...');
				await dispatch(actionFetchAllDrivers());
				await dispatch(actionFetchTeams());
				for (const key in createDriver) {
					dispatch(actionCreateDriver({ name: key, value: '' }));
				}
				setTimeout(() => {
					setStatus(false);
					setMessage('');
					navigate(`/home/driver/${driver.id}`);
				}, 2000);
			}
		}
	};
	return (
		<>
			{status && (
				<div className={styles.overlay}>
					<div className={`${styles.submission} ${classGradient} `}>
						<h3>{message}</h3>
					</div>
				</div>
			)}
			<form
				className={`${styles.form} ${classGradient} `}
				onSubmit={handleOnSubmit}
			>
				<div className={styles.containerInput}>
					<label htmlFor='name'>Nombre</label>
					<input
						value={createDriver.name}
						onChange={handleChange}
						name='name'
						minLength={3}
						maxLength={20}
						autoComplete='off'
						placeholder='Fernando...'
						className={errorsForm.name ? styles.inputError : styles.input}
					/>
					{errorsForm.name && <span>{errorsForm.name}</span>}
				</div>
				<div className={styles.containerInput}>
					<label>Apellido</label>
					<input
						value={createDriver.lastName}
						onChange={handleChange}
						name='lastName'
						minLength={3}
						maxLength={20}
						autoComplete='off'
						placeholder='Alonso...'
						className={errorsForm.lastName ? styles.inputError : styles.input}
					/>
					{errorsForm.lastName && <span>{errorsForm.lastName}</span>}
				</div>
				<div className={styles.containerInput}>
					<label>Nacionalidad</label>
					<input
						value={createDriver.nationality}
						onChange={handleChange}
						name='nationality'
						minLength={3}
						maxLength={20}
						autoComplete='off'
						placeholder='Español...'
						className={
							errorsForm.nationality ? styles.inputError : styles.input
						}
					/>
					{errorsForm.nationality && <span>{errorsForm.nationality}</span>}
				</div>
				<div className={styles.containerInput}>
					<label>Fecha de nacimiento</label>
					<input
						type='date'
						value={createDriver.dateOfBirth}
						name='dateOfBirth'
						onChange={handleChange}
						placeholder='dd/mm/aaaa'
						className={
							errorsForm.dateOfBirth ? styles.inputError : styles.input
						}
					/>
					{errorsForm.dateOfBirth && <span>{errorsForm.dateOfBirth}</span>}
				</div>
				<div className={styles.containerInput}>
					<label>Escuderias </label>
					<ListTeams
						isDarkMode={isDarkMode}
						driverTeam={createDriver.teams}
						action={actionCreateDriver}
						inputRef={inputRef}
					/>
					<input
						value={createDriver.teams}
						ref={inputRef}
						name='teams'
						onChange={handleChange}
						autoComplete='off'
						placeholder='Minardi, Renault...'
						className={errorsForm.teams ? styles.inputError : styles.input}
					/>
					{errorsForm.teams && <span>{errorsForm.teams}</span>}
				</div>
				<div className={styles.containerInput}>
					<label>Imagen</label>
					<input
						type='url'
						value={createDriver.image}
						name='image'
						onChange={handleChange}
						autoComplete='off'
						placeholder='https://...'
						className={errorsForm.image ? styles.inputError : styles.input}
					/>
					{errorsForm.image && <span>{errorsForm.image}</span>}
				</div>
				<div className={styles.containerDescription}>
					<label>Descripción</label>
					<textarea
						value={createDriver.description}
						name='description'
						onChange={handleChange}
						maxLength={500}
						minLength={20}
						autoComplete='off'
						placeholder='Es un piloto dos veces campeón del mundo de Fórmula 1, es campeón del mundo de Resistencia y dos veces vencedor de las 24 Horas de Le Mans...'
						className={errorsForm.description ? styles.textError : styles.text}
					/>
					{errorsForm.description && <span>{errorsForm.description}</span>}
				</div>
				<div className={styles.containerButton}>
					<button type='submit' disabled={isError(errorsForm)}>
						CREAR
					</button>
				</div>
			</form>
		</>
	);
};

export default FormDriver;
