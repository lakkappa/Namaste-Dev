import { combineReducers } from "redux";
import courses from './courseReducer'; //import reducer that is created

//Step-3: Create a root reducer to combine all reducers
//we pass combineReducers an object
const rootReducer = combineReducers({
    //Each property is set to a corresponding reducer
    courses
});

export default rootReducer;