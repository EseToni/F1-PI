
export const actionNextPage = () => {
    return {
        type : 'NEXT_PAGE'
    }
}
export const actionPrevPage = () => {
    return {
        type : 'PREV_PAGE'
    }
}
export const actionChangePage = (page) => {
    return {
        type : 'CHANGE_PAGE',
        payload : page
    }
 }
export const actionIndexPage = () => { 
    return {
        type : 'INDEX_PAGE'
    }
}
