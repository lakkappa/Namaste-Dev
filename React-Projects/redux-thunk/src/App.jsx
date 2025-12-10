import { useDispatch, useSelector } from 'react-redux'
import { INCREMENT, DECREMENT, MULTIPLICATION, DIVISION } from "./actions/calculatorAction";


function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  const incHandler = () => {
    dispatch({ type: INCREMENT})
  }
  const decHandler = () => {
    dispatch({ type: DECREMENT })
  }
  const mulHandler = () => {
    dispatch({ type: MULTIPLICATION })
  }
  const divHandler = () => {
    dispatch({ type: DIVISION })
  }
  return (
    <div className="App">
      Hello
      <p>counter - {counter}</p>
      <div>
        <button style={{ margin: '1rem' }} onClick={incHandler}> Increment</button>
        <button style={{ margin: '1rem' }}  onClick={decHandler}>Decrement</button>
        <button style={{ margin: '1rem' }} onClick={mulHandler}>Multiplication</button>
        <button style={{ margin: '1rem' }}  onClick={divHandler}>Division</button>
      </div>
    </div>
  )
}

export default App
