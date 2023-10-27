import styles from './styles.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const SortsElements = ({arrayInputs, actionAdd, actionRemove}) => {
	const dispatch = useDispatch();

	const initialChekedState = arrayInputs.reduce((acc, input) => { //creo un objeto con los valores de los inputs y los inicializo en false
		return { ...acc, [input.value]: false };
	}, {});

	const [checkedName, setCheckedName] = useState(initialChekedState);

	const handleChecked = (event) => {
		const { checked, value } = event.target;
		const updatedCheckedName = {}; //creo un objeto vacio para luego actualizarlo con los nuevos valores
		for (const key in checkedName) {
			updatedCheckedName[key] = key === value ? checked : false;
		}
		setCheckedName(updatedCheckedName);
		if (checked) {
			dispatch(actionAdd(value));
		} else {
			dispatch(actionRemove());
		}
	};
	return (
		<div className={styles.containerSorts}>
			{arrayInputs.map((input, index) => (
				<div className={styles.container} key={index++}>
					<input
						key={input.key1}
						className={styles.input}
						type='checkbox'
						id={input.name}
						name={input.name}
						value={input.value}
						checked={checkedName[input.value]}
						onChange={handleChecked}
					/>
					<label className={styles.label} htmlFor={input.name} key={input.key2}>
						{input.name}
					</label>
				</div>
			))}
		</div>
	);
};
export default SortsElements;
