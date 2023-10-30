const initialState = {
    createDriver : {
        name: '',
        lastName: '',
        nationality: '',
        dateOfBirth: '',
        teams: [],
        image: '',
        description: '',
    }
}

const reducerForm = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'CREATE_DRIVER':
            console.log(payload.name)
            return {
                ...state,
                createDriver : {
                    ...state.createDriver,
                    [payload.name] : payload.value
                }
            }
    
        default:
            return state;
    }
}

export default reducerForm