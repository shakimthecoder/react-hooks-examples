import { useState, useReducer } from 'react';

export const ReducerExample = () => {
    let [count, setCount ] = useState<number>(0);
    return (
        <div>
        <p>Count: {count} </p>
        <button onClick={() => setCount((prev) => prev + 1)} ></button>
        <button onClick={() => setCount((prev) => prev +1)}></button>
        </div>
    )
}