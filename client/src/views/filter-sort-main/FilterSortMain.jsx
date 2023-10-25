import styles from './styles.module.css';
import Filters from '../../components/filters/Filters';
const FilterSortMain = ({ isDarkMode }) => {
	const borderClass = isDarkMode ? styles.darkBorder : styles.normalBorder;

	return (
		<aside className={`${borderClass} ${styles.aside}`}>
        <Filters isDarkMode={isDarkMode}/>
		</aside>
	);
};

export default FilterSortMain;
