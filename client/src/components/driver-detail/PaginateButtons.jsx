
import { useEffect, useState} from 'react';
import {  useSelector } from 'react-redux';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { idDriverNextDetail , idDriverPrevDetail } from '../../helpers/paginateDetails';

const PaginateButtons = ({ id }) => {
	const [prevId, setPrevId] = useState(0);
	const [nextId, setNextId] = useState(0);
	const drivers = useSelector(
		(state) => state.driverReducer.drivers
	);

	useEffect(() => {
        if (id !== undefined) {
			setNextId(idDriverNextDetail(id,drivers))
			setPrevId(idDriverPrevDetail(id,drivers))
        }
	}, [id,drivers]);

	return (
		<div>
			<Link to={`/home/driver/${prevId}`}>
				<button className={styles.button} disabled={prevId == 0 }>{`<< anterior`}</button>
			</Link>
			<Link to={`/home/driver/${nextId}`}>
				<button className={styles.button} disabled={nextId == true}>{`siguiente >>`}</button>
			</Link>
		</div>
	);
};

export default PaginateButtons;
