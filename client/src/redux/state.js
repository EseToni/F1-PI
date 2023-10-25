import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducer';
import ThunkMiddleware from 'redux-thunk';
import pagesReducer from './reducers/reducerPages';

const rootReducerCombined = combineReducers({
    driverReducer: rootReducer,
    pageReducer: pagesReducer, // Cambia el nombre de asignación
});

const store = configureStore({
	reducer: rootReducerCombined,
	middleware: [ThunkMiddleware],
});

export default store;
