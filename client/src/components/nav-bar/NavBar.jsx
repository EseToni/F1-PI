import styles from './styles.module.css';
import SearchBar from '../search-bar/SearchBar';
import { Link } from 'react-router-dom';
import ToggleDarkMode from '../toggle-dark-mode/toggleDarkMode';
import { useTheme } from '../../theme/ThemeProvider';

const NavBar = () => {
    const {isDarkMode, toggleTheme} = useTheme();
	const borderClass = isDarkMode ? styles.darkBorder : styles.normalBorder;
	
	return (
		<nav className={`${styles.container} ${borderClass}`}>
			<SearchBar />
			<Link className='customLink'>
				<h3 className={styles.h3Driver}>Crea tu piloto</h3>
			</Link>
			<ToggleDarkMode 
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
            />
		</nav>
	);
};

export default NavBar;
