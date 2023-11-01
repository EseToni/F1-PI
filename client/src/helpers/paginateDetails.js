export const idDriverNextDetail =  (id , drivers) => {
    const indexDriverNext =  drivers.findIndex((driver) => driver.id == id);
    const idDriverNext = indexDriverNext === drivers.length - 1 ? true : drivers[indexDriverNext + 1].id;
    return idDriverNext;
}

export const idDriverPrevDetail = (id, drivers) => {
    const indexDriverPrev = drivers.findIndex((driver) => driver.id == id);
    const idDriverPrev = indexDriverPrev === 0 ? 0 : drivers[indexDriverPrev - 1].id;
    return idDriverPrev;
}