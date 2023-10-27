import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const FilterElement = ({ name, actionAdd, actionRemove }) => {
	const dispatch = useDispatch();
	const [checked, setChecked] = useState(false);
	const classChecked = checked ? styles.checked : null;
	const handleCheck = () => {
		if (!checked) {
			dispatch(actionAdd(name));
		} else {
			dispatch(actionRemove(name));
		}
		setChecked(!checked);
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
				checked={checked}
				onChange={handleCheck}
			/>
		</div>
	);
};

export default FilterElement;
