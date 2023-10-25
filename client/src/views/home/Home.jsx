import NavBar from '../../components/nav-bar/NavBar';
import styles from './styles.module.css';
import DriversMain from '../drivers-main/DriversMain';
import FilterSortMain from '../filter-sort-main/FilterSortMain';
import { useTheme } from '../../theme/ThemeProvider';
const Home = () => {
	const { isDarkMode } = useTheme();
	const borderClass = isDarkMode ? styles.darkBorder : styles.normalBorder;
	return (
		<div className={`${styles.containerGrid}` }>
			<header className={`${borderClass} ${styles.header}`}>
				<h1 className={styles.title}>F1 speedmaster</h1>
			</header>
			<NavBar />
			<FilterSortMain isDarkMode={isDarkMode}/>
			<DriversMain />
		</div>
	);
};

export default Home;
