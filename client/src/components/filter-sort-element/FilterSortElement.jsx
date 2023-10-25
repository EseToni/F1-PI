import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const FilterSortElement = ({ name, actionAdd, actionRemove, actionFilter }) => {
	const dispatch = useDispatch();
	const [checked, setChecked] = useState(false);
    
	const handleCheck = () => {
        if(!checked){
            dispatch(actionAdd(name));
            dispatch(actionFilter());
        }else{
            dispatch(actionRemove(name));
            dispatch(actionFilter());
        }
        setChecked(!checked);
	};

	return (
		<div className={styles.container}>
			<input
				className={styles.input}
				type='checkbox'
				id={name}
				name={name}
				value={name}
				checked={checked}
				onChange={handleCheck}
			/>
			<label className={styles.label} htmlFor={name}>
				{name}
			</label>
		</div>
	);
};

export default FilterSortElement;
