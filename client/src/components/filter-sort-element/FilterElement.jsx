import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { actionActiveTeams } from '../../redux/actions/actionsFilterSort';

const FilterElement = ({ name}) => {
	const dispatch = useDispatch();
	const teamsFilterActive = useSelector(
		(state) => state.driverReducer.teamsFilterActive
	);
	const classChecked = teamsFilterActive[name] ? styles.checked : null;
	const handleCheck = () => {
		dispatch(
			actionActiveTeams({ name: name, active: !teamsFilterActive[name] })
		);
	};

	return (
		<div className={styles.container}>
			<label className={`${styles.label} ${classChecked} `} htmlFor={name}>
				{name}
			</label>
			<input
				className={styles.input}
				type='checkbox'
				id={name}
				name={name}
				value={name}
				checked={teamsFilterActive[name]|| false}
				onChange={handleCheck}
			/>
		</div>
	);
};

export default FilterElement;
