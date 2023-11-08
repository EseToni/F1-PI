import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { actionAlertOff } from '../../redux/actions/actionsDrivers';
import { useTheme } from '../../theme/ThemeProvider';

const Alert = () => {
	const dispatch = useDispatch();
	const { isDarkMode } = useTheme();
	const classBg = isDarkMode ? styles.dark : styles.normal;
	const handleClick = () => {
		dispatch(actionAlertOff());
	};

	return (
		<div className={`${styles.container} ${classBg}`}>
			<h3>Puedes clicar en los pilotos para ver mas detalles sobre ellos</h3>
			<button onClick={handleClick}>x</button>
		</div>
	);
};

export default Alert;
