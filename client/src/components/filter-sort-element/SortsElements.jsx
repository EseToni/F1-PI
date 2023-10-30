import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
const SortsElements = ({arrayInputs, state,actionActive}) => {
	const dispatch = useDispatch();

	const handleChecked = (event) => {
		const { checked, value } = event.target;
		dispatch(actionActive({name : value, active : checked}));
		for (const key in state){
			key === value ? dispatch(actionActive({name : key , active : checked})) : dispatch(actionActive({name : key , active : false}))
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
						checked={state[input.value] || false}
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
