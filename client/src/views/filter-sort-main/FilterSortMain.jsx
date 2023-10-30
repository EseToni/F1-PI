import styles from './styles.module.css';
import Filters from '../../components/filters/Filters';
import { useTheme } from '../../theme/ThemeProvider';
const FilterSortMain = () => {
	const { isDarkMode } = useTheme();
	const borderClass = isDarkMode ? styles.darkBorder : styles.normalBorder;

	return (
		<aside className={`${borderClass} ${styles.aside}`}>
			<Filters isDarkMode={isDarkMode} />
		</aside>
	);
};

export default FilterSortMain;
