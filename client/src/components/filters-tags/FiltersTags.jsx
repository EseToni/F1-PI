import styles from './styles.module.css';
import {
	actionActiveOrigin,
	actionActiveTeams,
	actionActiveSort,
} from '../../redux/actions/actionsFilterSort';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

const FiltersTags = () => {
	const dispatch = useDispatch();
	const teamsFilterActive = useSelector(
		(state) => state.driverReducer.teamsFilterActive
	);
	const originFilterActive = useSelector(
		(state) => state.driverReducer.originFilterActive
	);
	const orderSortActive = useSelector(
		(state) => state.driverReducer.orderSortActive
	);

	const filtersConfig = useMemo(() => {
		return [
			{
				state: teamsFilterActive,
				action: actionActiveTeams,
			},
			{
				state: originFilterActive,
				action: actionActiveOrigin,
			},
			{
				state: orderSortActive,
				action: actionActiveSort,
			},
		];
	}, [originFilterActive, orderSortActive, teamsFilterActive]);

	const filteredComponents = useMemo(() => {
		const filtersTags = [];
		filtersConfig.map((filter) => {
			const filterActive = filter.state;
			const filterAction = filter.action;
			for (const key in filterActive) {
				if (filterActive[key]) {
					filtersTags.push(
						<button
							key={key}
							onClick={() =>
								dispatch(
									filterAction({ name: key, active: !filterActive[key] })
								)
							}
							className={styles.button}
						>
							{key} X
						</button>
					);
				}
			}
		});
		return filtersTags;
	}, [filtersConfig, dispatch]);
	return <div className={styles.containerDiv}>{filteredComponents}</div>;
};

export default FiltersTags;
