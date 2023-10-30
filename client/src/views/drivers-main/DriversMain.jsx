import styles from './styles.module.css';
import MapDrivers from '../../components/MapDrivers/MapDrivers';
import PaginateTop from '../../components/paginate-top/PaginateTop';
import FilterSortMain from '../filter-sort-main/FilterSortMain';

const DriversMain = () => {
	return (
		<div className={styles.containerGrid}>
			<FilterSortMain />
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
		</div>
	);
};

export default DriversMain;
