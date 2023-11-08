import styles from './styles.module.css';
import MapDrivers from '../../components/MapDrivers/MapDrivers';
import PaginateTop from '../../components/paginate-top/PaginateTop';
import FilterSortMain from '../filter-sort-main/FilterSortMain';
import FiltersTags from '../../components/filters-tags/FiltersTags';
import Alert from '../../components/alert/Alert';
import { useSelector } from 'react-redux';

const DriversMain = () => {
	const alert = useSelector((state) => state.driverReducer.alert);

	return (
		<>
			<div className={styles.containerGrid}>
				<FilterSortMain />
				<div className={styles.mainContainer}>
					<div className={styles.container}>
						<h1>Pilotos</h1>
						<PaginateTop />
					</div>
					<FiltersTags />
					<MapDrivers />
				{alert && <Alert />}	
				</div>
			</div>
		</>
	);
};

export default DriversMain;
