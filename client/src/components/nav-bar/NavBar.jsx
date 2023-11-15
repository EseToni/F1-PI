import styles from './styles.module.css';
import SearchBar from '../search-bar/SearchBar';
import { Link } from 'react-router-dom';
import ToggleDarkMode from '../toggle-dark-mode/ToggleDarkMode.jsx';
import { useTheme } from '../../theme/ThemeProvider';
import { useLocation } from 'react-router-dom';
const NavBar = () => {
	const { isDarkMode, toggleTheme } = useTheme();
	const location = useLocation();
	const borderClass = isDarkMode ? styles.darkBorder : styles.normalBorder;
	const isInCreate = location.pathname === '/home/create-driver';

	return (
		<nav className={`${styles.container} ${borderClass}`}>
			<SearchBar isDarkMode={isDarkMode} />
			<div className={styles.containerChild}>
				<Link className='customLink' to='/home/create-driver'>
					<button className={styles.button} disabled={isInCreate}>
						CREAR TU PILOTO
					</button>
				</Link>
				<ToggleDarkMode isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
			</div>
		</nav>
	);
};

export default NavBar;
