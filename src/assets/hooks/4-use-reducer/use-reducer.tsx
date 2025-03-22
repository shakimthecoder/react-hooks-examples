import { useState, useReducer } from 'react';

export const ReducerExample = () => {

    const reducer = () => {}
    let [state, dispatch ] = useReducer(reducer, { count: 0})
    return (
        <div>
        <p>Count: {count} </p>
        <button onClick={() => setCount((prev) => prev + 1)}> + </button>
        <button onClick={() => setCount((prev) => prev - 1)}> - </button>
        </div>
    )
}