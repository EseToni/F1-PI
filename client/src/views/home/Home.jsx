import NavBar from '../../components/nav-bar/NavBar';
import styles from './styles.module.css';
import { useTheme } from '../../theme/ThemeProvider';
import { Outlet } from 'react-router-dom';

const Home = () => {
	const { isDarkMode } = useTheme();
	const borderClass = isDarkMode ? styles.darkBorder : styles.normalBorder;
	return (
		<>
			<div className={`${styles.containerGrid}`}>
				<header className={`${borderClass} ${styles.header}`}>
					<h1 className={styles.title}>F1 speedmaster</h1>
				</header>
				<NavBar />
			</div>
			<div className={styles.containerOutlet}>
				<Outlet />
			</div>
		</>
	);
};

export default Home;
