import { createStore } from 'redux';
import rootReducer from './reducers';

//Step-4
//Declare configureStore function, 
//which takes one argument to initialize the store with data
export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}