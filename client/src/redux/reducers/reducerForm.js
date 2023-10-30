const initialState = {
    createDriver : {
        name: '',
        lastName: '',
        nationality: '',
        dateOfBirth: '',
        teams: [],
        image: '',
        description: '',
    },
    errorsForm : {

    }
}

const reducerForm = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'CREATE_DRIVER':
            return {
                ...state,
                createDriver : {
                    ...state.createDriver,
                    [payload.name] : payload.value
                }
            }
        case 'ERRORS_FORM':
            return {
                ...state,
                errorsForm : payload
            }
        default:
            return state;
    }
}

export default reducerForm