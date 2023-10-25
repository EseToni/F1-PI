import { useSelector, useDispatch } from 'react-redux';
import {actionPrevPage,actionNextPage} from '../../redux/actions/actionsPages';
import styles from './styles.module.css';

const PaginateTop = () => {
	const currentPage = useSelector(
		(state) => state.pageReducer.pages.currentPage
	);
	const driversPerPage = useSelector(
		(state) => state.pageReducer.pages.driversPerPage
	);
	const drivers = useSelector((state) => state.driverReducer.drivers);
    
	const dispatch = useDispatch();

	const canGoToNextPage = () => currentPage < drivers.length / driversPerPage;
	const canGoToPrevPage = () => currentPage > 1;
	return (
		<div className={styles.container}>
			<button
				onClick={() => canGoToPrevPage() && dispatch(actionPrevPage())}
                className={`${styles.button}`}
                disabled={!canGoToPrevPage()}
			>{`<< Anterior`}</button>
			<button
				onClick={() => canGoToNextPage() && dispatch(actionNextPage())}
                className={`${styles.button}`}
                disabled={!canGoToNextPage()}
			>{`Siguiente >>`}</button>
		</div>
	);
};

export default PaginateTop;
