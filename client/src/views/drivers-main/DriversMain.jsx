import styles from './styles.module.css';
import DriversCards from '../../components/drivers-cards/driversCards';
import PaginateTop from '../../components/paginate-top/PaginateTop';

const DriversMain = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.container}>
				<h1>Drivers</h1>
				<PaginateTop />
			</div>
			<div>
				<button>age x</button>
			</div>
			<DriversCards />
		</div>
	);
};

export default DriversMain;
