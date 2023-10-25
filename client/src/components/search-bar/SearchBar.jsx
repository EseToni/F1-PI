import styles from './styles.module.css';
import { CiSearch } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { actionSearchInput } from '../../redux/actions/actionsDrivers';
const SearchBar = () => {
	const dispatch = useDispatch();

	const handleSearch = (e) => {
		dispatch(actionSearchInput(e.target.value));
	};
	return (
		<>
			<label className={styles.label}>
				<CiSearch className={styles.icon} />
				<input
					className={styles.input}
					placeholder='Busca entre mas de 500 pilotos...'
					onChange={handleSearch}
				/>
			</label>
		</>
	);
};

export default SearchBar;
