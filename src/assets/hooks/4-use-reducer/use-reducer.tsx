import { useState, useReducer, useEffect, useRef } from 'react';

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
export const SecondRefExample = () => {
        let [count, setCount] = useState<number>(0);
        const previousCount = useRef(0);

        useEffect(() => {         
            previousCount.current = count;
        }, [count] );
        return (
            <div>
                <p>Previous Count: {previousCount.current} </p>
                <p>Count: {count}</p>
                <button onClick={() => setCount((prev) => prev +1)}>Increment</button>
            </div>
        )
    }
