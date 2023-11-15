import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { actionSearchInput } from '../../redux/actions/actionsDrivers';
import searchNormal from '../../assets/icons/biSearchDark.svg';
import searchDark from '../../assets/icons/biSearchNormal.svg';

const SearchBar = ({ isDarkMode }) => {
	const dispatch = useDispatch();

	const handleSearch = (e) => {
		dispatch(actionSearchInput(e.target.value));
	};
	
	return (
		<div className={styles.container}>
			<label className={styles.label}>
				{isDarkMode ? (
					<img src={searchDark} alt='search' className={styles.icon} />
				) : (
					<img src={searchNormal} alt='search' className={styles.icon} />
				)}
				<input
					className={styles.input}
					placeholder='Busca entre mas de 500 pilotos...'
					onChange={handleSearch}
				/>
			</label>
		</div>
	);
};

export default SearchBar;
