export const actionCreateDriver = (payload) => {
    if(payload.name === 'teams') {
        payload.value = payload.value.split(',')
    }
    return {
        type: 'CREATE_DRIVER',
        payload
    }
}

export const actionErrorsForm = (payload) => {

    return {
        type: 'ERRORS_FORM',
        payload
    }
}