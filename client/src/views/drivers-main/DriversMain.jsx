import styles from './styles.module.css';
import MapDrivers from '../../components/MapDrivers/MapDrivers';
import PaginateTop from '../../components/paginate-top/PaginateTop';
import { useLocation } from 'react-router-dom';

const DriversMain = () => {
	const location = useLocation();
	

	return (
		<div className={styles.mainContainer}>
			<div className={styles.container}>
				<h1>Drivers</h1>
				<PaginateTop />
			</div>
			<div>
				<button>age x</button>
			</div>
			<MapDrivers />
		</div>
	);
};

export default DriversMain;
