import { useEffect, useState } from 'react';
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
import {
	actionTeamsDetails,
	actionOriginDetails,
} from '../../redux/slices/sliceFilter';

const Filters = () => {
	const dispatch = useDispatch();
	const teams = useSelector((state) => state.driverReducer.teams);
	const originFilterActive = useSelector(
		(state) => state.driverReducer.originFilterActive
	);
	const orderSortActive = useSelector(
		(state) => state.driverReducer.orderSortActive
	);
	const teamsDetails = useSelector(
		(state) => state.detailsReducer.teamsDetails
	);
	const originDetails = useSelector(
		(state) => state.detailsReducer.originDetails
	);
	const [openDetailsTeams, setOpenDetailsTeams] = useState(teamsDetails);
	const [openDetailsOrigin, setOpenDetailsOrigin] = useState(originDetails);

	useEffect(() => {
		if(teams.length === 0)
			dispatch(actionFetchTeams());
	}, [dispatch, teams.length]);
	useEffect(() => {
		setOpenDetailsTeams(teamsDetails);
	}, [teamsDetails]);
	useEffect(() => {
		setOpenDetailsOrigin(originDetails);
	}, [originDetails]);

	const handleClickTeams = () => {
		dispatch(actionTeamsDetails(!openDetailsTeams));
	};
	const handleClickOrigin = () => {
		dispatch(actionOriginDetails(!openDetailsOrigin));
	};
	return (
		<aside className={styles.aside}>
			<h2>Filtrar por: </h2>
			<details open={openDetailsTeams}>
				<summary className={styles.summary} onClick={handleClickTeams}>
					Escuderias
				</summary>
				<div className={styles.inputContainerTeams}>
					{teams.map((team) => (
						<FilterElement key={team.id} name={team.name} />
					))}
				</div>
			</details>
			<details open={openDetailsOrigin}>
				<summary className={styles.summary} onClick={handleClickOrigin}>
					Por Origen
				</summary>
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
