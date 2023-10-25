import { useSelector } from 'react-redux';
import { useMemo } from 'react';
const usePagination = () => {
	const currentPage = useSelector((state) => state.pageReducer.pages.currentPage);
	const driversPerPage = useSelector((state) => state.pageReducer.pages.driversPerPage);

	const [startIndex, endIndex] = useMemo(() => {
		const startIndex = (currentPage - 1) * driversPerPage;
		const endIndex = startIndex + driversPerPage;
		return [startIndex, endIndex];
	}, [currentPage, driversPerPage]);

	
	return { startIndex, endIndex };
};

export default usePagination;
