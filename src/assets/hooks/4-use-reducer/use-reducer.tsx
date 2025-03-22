import { useState, useReducer } from 'react';

const reducer = (state, action) => {
    switch(action.type){
    case "increment":
        return { count: state.count + 1}
    }
    switch(action.type){
        case "decrement":
            return { count: state.count - 1}
    }
    switch(action.type){
        case "double":
            return { count: state.count * 2}
    }
}

export const ReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div>
            <p>Count: {state.count} </p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "double" })}>++</button>
        </div>
    );
    
}