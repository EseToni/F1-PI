import { useTheme } from '../../theme/ThemeProvider';
import DriverCard from '../driver-card/DriverCard';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';

const PreviewCard = () => {
	const createDriver = useSelector((state) => state.formReducer.createDriver);
	const { isDarkMode } = useTheme();
	const borderClass = isDarkMode ? styles.darkBorder : styles.normalBorder;
	return (
		<div className={`${borderClass} ${styles.containerDiv}`}>
			<h2>Vista previa</h2>
			<DriverCard
				id={createDriver.id}
				name={createDriver.name}
				image={createDriver.image}
				lastName={createDriver.lastName}
				teams={createDriver.teams}
				key={createDriver.id}
				isDarkMode={isDarkMode}
				canNavigate={true}
			/>
		</div>
	);
};

export default PreviewCard;
