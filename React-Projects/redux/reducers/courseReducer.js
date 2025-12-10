//Step-2: Create Reducer to handle the action
export default function courseReducer(state = [], action) {
    
    //Check the actions with switch and return the updated state
    switch (action.type) {
        case "CREATE_COURSE":
            return [...state, { ...action.course }];
        default:
            return state;
    }
}



