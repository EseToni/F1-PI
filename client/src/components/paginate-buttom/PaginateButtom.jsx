import { useSelector, useDispatch } from 'react-redux';
import { actionChangePage } from '../../redux/actions/actionsPages';
import { displayPages , getRandomNumber} from '../../helpers/displayPages';
import styles from './styles.module.css'

const PaginateButtom = () => {
    const currentPage = useSelector((state) => state.pageReducer.pages.currentPage);
    const driversPerPage = useSelector((state) => state.pageReducer.pages.driversPerPage);
    const allCards = useSelector((state) => state.driverReducer.drivers);
    const totalPages = Math.ceil(allCards.length / driversPerPage);
    const totalDisplayPages = 3;
    const middlePage = Math.floor(totalDisplayPages / 2);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            {displayPages(currentPage, totalPages, totalDisplayPages,middlePage).map((page, index) => {
                return (
                    <div
                        key={index}
                        className={`${styles.pageItem} ${
                            currentPage === page ? styles.active : null
                        }`}
                        
                        onClick={() => {
                            if(typeof page === 'number')dispatch(actionChangePage(page))
                            else dispatch(actionChangePage(getRandomNumber(currentPage,totalPages)))
                        }}
                    >
                        <button className={`${styles.pageLink} ${
                            currentPage === page ? styles.linkActive : null
                        }`}
                        disabled={currentPage === page ? true : false}
                        >{page}</button>
                    </div>
                );
            })}
        </div>
    );
};

export default PaginateButtom;
