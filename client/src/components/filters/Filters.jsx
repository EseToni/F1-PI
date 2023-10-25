import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	actionFetchTeams,
	actionAddTeam,
	actionRemoveTeam,
	actionFilterByTeam,
	actionAddOrigin,
	actionRemoveOrigin,
	actionFilterByOrigin,
	actionSortAdd,
	actionSortRemove,
	actionSortAgeAsc,
	actionSortAgeDesc,
	actionSortNameAsc,
	actionSortNameDesc,
} from '../../redux/actions/actionsFilterSort';
import FilterSortElement from '../filter-sort-element/FilterSortElement';
import styles from './styles.module.css';

const Filters = ({ isDarkMode }) => {
	const dispatch = useDispatch();
	const teams = useSelector((state) => state.driverReducer.teams);
	useEffect(() => {
		dispatch(actionFetchTeams());
	}, [dispatch]);

	return (
		<aside>
			<h2>Filtrar por: </h2>
			<details>
				<summary className={styles.summary}>Escuderias</summary>
				<div className={styles.inputContainer}>
					{teams.map((team) => (
						<FilterSortElement
							key={team.id}
							name={team.name}
							actionAdd={actionAddTeam}
							actionRemove={actionRemoveTeam}
							actionFilter={actionFilterByTeam}
						/>
					))}
				</div>
			</details>
			<details>
				<summary className={styles.summary}>Por Origen</summary>
				<div className='filters-dropdown'>
					<FilterSortElement
						name='Pilotos originales'
						actionAdd={actionAddOrigin}
						actionRemove={actionRemoveOrigin}
						actionFilter={actionFilterByOrigin}
					/>
					<FilterSortElement
						name='Hechos por fans'
						actionAdd={actionAddOrigin}
						actionRemove={actionRemoveOrigin}
						actionFilter={actionFilterByOrigin}
					/>
				</div>
			</details>
			<h2>Ordenar por: </h2>
			<FilterSortElement
				name='A - Z'
				actionAdd={actionSortAdd}
				actionRemove={actionSortRemove}
				actionFilter={actionSortNameAsc}
			/>
			<FilterSortElement
				name='Z - A'
				actionAdd={actionSortAdd}
				actionRemove={actionSortRemove}
				actionFilter={actionSortNameDesc}
			/>
			<FilterSortElement name='Edad ascendente' 
				actionAdd={actionSortAdd}
				actionRemove={actionSortRemove}
				actionFilter={actionSortAgeAsc}
			/>
			<FilterSortElement name='Edad descendente' 
				actionAdd={actionSortAdd}
				actionRemove={actionSortRemove}
				actionFilter={actionSortAgeDesc}
			/>
		</aside>
	);
};

export default Filters;
