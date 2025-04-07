// inside the terminal: npm install redux react-redux
// useSelector: A React-Redux hook used to read values from the Redux store.
// useDispatch: A React-Redux hook used to send actions to the Redux store (to update state).
import React from "react"
import { useSelector, useDispatch } from "react-redux"

function App() {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();


    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT'})} >+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}>-</button>
        </div>
    );
}

export default App
