import {
	actionNextDriverDetail,
	actionPrevDriverDetail,
} from '../../redux/actions/actionsDrivers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const PaginateButtons = ({ id }) => {

	const dispatch = useDispatch();
	const idDriverNextDetail = useSelector(
		(state) => state.driverReducer.idDriverNextDetail
	);
	const idDriverPrevDetail = useSelector(
		(state) => state.driverReducer.idDriverPrevDetail
	);

	useEffect(() => {
        if (id !== undefined) {
            dispatch(actionNextDriverDetail(id))
            dispatch(actionPrevDriverDetail(id));
        }
	}, [id, dispatch]);

	return (
		<div>
			<Link to={`/home/driver/${idDriverPrevDetail}`}>
				<button className={styles.button} disabled={idDriverPrevDetail == 0 }>{`<< anterior`}</button>
			</Link>
			<Link to={`/home/driver/${idDriverNextDetail}`}>
				<button className={styles.button} disabled={idDriverNextDetail == true}>{`siguiente >>`}</button>
			</Link>
		</div>
	);
};

export default PaginateButtons;
