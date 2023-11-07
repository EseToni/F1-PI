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
	} else if (currentPage <= middlePage + 1) {
		return [...range(1, totalDisplayPages), {right:'...'}, totalPages];
	} else if (currentPage >= totalPages - middlePage) {
		return [1, {left:'...'}, ...range(totalPages - totalDisplayPages + 1, totalPages)];
	} else {
		return [
			1,
			{left:'...'},
			...range(currentPage - middlePage + 0 , currentPage + middlePage),
			{right:'...'},
			totalPages,
		];
	}
};

export const getRandomNumber = (min, max) => {
	return Math.ceil(Math.random() * (max - min) + min);
};
