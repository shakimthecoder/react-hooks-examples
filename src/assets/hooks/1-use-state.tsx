import { useState } from 'react';

export const countExample = () => {
    let count = 0;

    const increaseCount = () => {
        count += 1;
        console.log(count);
    }

    return (
        <div>
        <p>Count: { count }</p>
        <button onClick={increaseCount}>Increase count</button>
    </div>)
   
    
}