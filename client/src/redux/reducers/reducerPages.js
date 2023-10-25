
const initialState = {
	isLoading: false,
	pages: {
		currentPage: 1,
		driversPerPage: 9,
		totalPages: 0,
	},
};

const pagesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
        case 'NEXT_PAGE':
            return {
                ...state,
                pages : {
                    ...state.pages,
                    currentPage : state.pages.currentPage + 1
                }
            }
        case 'PREV_PAGE':
            return {
                ...state,
                pages : {
                    ...state.pages,
                    currentPage : state.pages.currentPage - 1
                }
            }
        case 'CHANGE_PAGE':
            return {
                ...state,
                pages : {
                    ...state.pages,
                    currentPage : payload
                }
            }
        case 'INDEX_PAGE':
            return {
                ...state,
                pages : {
                    ...state.pages,
                    currentPage : 1
                }
            }
		default:
			return state;
	}
};

export default pagesReducer
