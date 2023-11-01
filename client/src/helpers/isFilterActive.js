export const isActive = (filters) => {
    let flag = false;
    for (let key in filters) {
        if (filters[key]) {
            flag = true;
            break;
        }
    }
    return flag
}