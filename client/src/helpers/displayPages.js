const range = (start, end) =>
	Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const displayPages = (
	currentPage,
	totalPages,
	totalDisplayPages,
	middlePage
) => {
	if (totalPages <= totalDisplayPages) {
		return range(1, totalPages);
	} else if (currentPage <= middlePage) {
		return [...range(1, totalDisplayPages), '...', totalPages];
	} else if (currentPage >= totalPages - middlePage) {
		return [1, '...', ...range(totalPages - totalDisplayPages + 2, totalPages)];
	} else {
		return [
			1,
			'...',
			...range(currentPage - middlePage + 1 , currentPage + middlePage),
			'...',
			totalPages,
		];
	}
};

export const getRandomNumber = (min, max) => {
	return Math.ceil(Math.random() * (max - min) + min);
};
