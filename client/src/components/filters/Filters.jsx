import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	actionFetchTeams,
	actionActiveOrigin,
	actionActiveSort,
} from '../../redux/actions/actionsFilterSort';
import { SORT_INPUTS, ORIGIN_INPUTS } from '../../constants/sortInputs';
import FilterElement from '../filter-sort-element/FilterElement';
import styles from './styles.module.css';
import SortsElements from '../filter-sort-element/SortsElements';

const Filters = ({ isDarkMode }) => {
	const dispatch = useDispatch();
	const teams = useSelector((state) => state.driverReducer.teams);
	const originFilterActive = useSelector(
		(state) => state.driverReducer.originFilterActive
	);
	const orderSortActive = useSelector(
		(state) => state.driverReducer.orderSortActive
	);
	
	useEffect(() => {
		dispatch(actionFetchTeams());
	}, [dispatch]);

	return (
		<aside>
			<h2>Filtrar por: </h2>
			<details>
				<summary className={styles.summary}>Escuderias</summary>
				<div className={styles.inputContainerTeams}>
					{teams.map((team) => (
						<FilterElement key={team.id} name={team.name} />
					))}
				</div>
			</details>
			<details>
				<summary className={styles.summary}>Por Origen</summary>
				<div className={styles.inputContainer}>
					<SortsElements
						arrayInputs={ORIGIN_INPUTS}
						state={originFilterActive}
						actionActive={actionActiveOrigin}
					/>
				</div>
			</details>
			<h2>Ordenar por: </h2>
			<SortsElements
				arrayInputs={SORT_INPUTS}
				state={orderSortActive}
				actionActive={actionActiveSort}
			/>
		</aside>
	);
};

export default Filters;
