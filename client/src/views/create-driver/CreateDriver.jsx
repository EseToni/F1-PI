import FormDriver from '../../components/form-Driver/FormDriver';
import PreviewCard from '../../components/preview-card/PreviewCard';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const CreateDriver = () => {
	return (
		<>
			<div className={styles.containerGrid}>
				<PreviewCard />
				<div className={styles.containerForm}>
					<div className={styles.containerNav}>
						<Link to='/home/drivers'>
							<button className={styles.button}>Home</button>
						</Link>
						<h1>Crea tu piloto</h1>
					</div>
					<FormDriver />
				</div>
			</div>
		</>
	);
};

export default CreateDriver;
