export const actionCreateDriver = (payload) => {
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