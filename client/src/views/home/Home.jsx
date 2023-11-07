import NavBar from '../../components/nav-bar/NavBar';
import styles from './styles.module.css';
import { useTheme } from '../../theme/ThemeProvider';
import { Outlet } from 'react-router-dom';
import F1 from '../../assets/icons/F1.svg';

const Home = () => {
	const { isDarkMode } = useTheme();
	const borderClass = isDarkMode ? styles.darkBorder : styles.normalBorder;
	return (
		<div className={styles.containerMain}>
			<div className={`${styles.containerGrid}`}>
				<header className={`${borderClass} ${styles.header}`}>
					<img src={F1} alt='F1' className={styles.icon} />
					<h1 className={styles.title}>SpeedMaster</h1>
				</header>
				<NavBar />
			</div>
			<div className={styles.containerOutlet}>
				<Outlet />
			</div>
		</div>
	);
};

export default Home;
