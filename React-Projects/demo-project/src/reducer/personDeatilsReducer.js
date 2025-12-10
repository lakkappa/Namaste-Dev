
const personDetailsReducer = (state = {}, action) => {
    console.log(state +"State" , action +"action");
    switch (action.type) {
        case 'FIRST_NAME':
            return Object.assign({}, state, { firstnameData: action.datafirst })
        default:
           return state
    }
}
export default personDetailsReducer;