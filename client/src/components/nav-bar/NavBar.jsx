import styles from './styles.module.css';
import SearchBar from '../search-bar/SearchBar';
import { Link } from 'react-router-dom';
import ToggleDarkMode from '../toggle-dark-mode/toggleDarkMode';
import { useTheme } from '../../theme/ThemeProvider';

const NavBar = () => {
	const { isDarkMode, toggleTheme } = useTheme();
	const borderClass = isDarkMode ? styles.darkBorder : styles.normalBorder;
	const bgClass = isDarkMode ? styles.darkBg : styles.normalBg;

	return (
		<nav className={`${styles.container} ${borderClass}`}>
			<SearchBar />
			<Link className='customLink' to='/home/create-driver'>
				<h1 className={` ${bgClass}`}>
					CREAR TU PILOTO
				</h1>
			</Link>
			<ToggleDarkMode isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
		</nav>
	);
};

export default NavBar;
