import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { actionAlertOff } from '../../redux/actions/actionsDrivers';

const Alert = () => {
	const dispatch = useDispatch;

	return (
		<div className={styles.container}>
			<button onClick={() => dispatch(actionAlertOff())}>x</button>
			<h3>Puedes clicar en los pilotos para ver mas detalles sobre ellos</h3>
		</div>
	);
};

export default Alert;
