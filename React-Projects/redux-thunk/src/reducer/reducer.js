import { INCREMENT, DECREMENT, MULTIPLICATION, DIVISION } from "../actions/calculatorAction";


const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                counter: state.counter - 1
            }
        case MULTIPLICATION:
            return {
                counter: state.counter * 2
            }
        case DIVISION:
            return {
                counter: state.counter / 2
            }
        default:
            return state;
    }
}
export default counterReducer;
