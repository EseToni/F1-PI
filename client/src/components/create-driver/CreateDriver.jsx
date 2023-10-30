import styles from './styles.module.css';
import FormDriver from '../form-Driver/FormDriver';

const CreateDriver = () => {
	return (
		<div className={styles.containerMain}>
			<div className={styles.containerNav}>
				<button className={styles.button}>Home</button>
				<h1>Crea tu piloto</h1>
			</div>
			<FormDriver />
		</div>
	);
};

export default CreateDriver;
