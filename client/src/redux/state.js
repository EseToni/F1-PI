import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducer';
import ThunkMiddleware from 'redux-thunk';
import pagesReducer from './reducers/reducerPages';
import reducerForm from './reducers/reducerForm';
import sliceFilter from './slices/sliceFilter';

const rootReducerCombined = combineReducers({
    driverReducer: rootReducer,
    pageReducer: pagesReducer, // Cambia el nombre de asignación
    formReducer: reducerForm,
    detailsReducer: sliceFilter,
});

const store = configureStore({
	reducer: rootReducerCombined,
	middleware: [ThunkMiddleware],
});

export default store;
