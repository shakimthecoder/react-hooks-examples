import { useState } from 'react';

export default function CountExample(): any {
    let count = 0;
    let [counter, setCounter] = useState<number>(0);

    const increaseCount = () => {
        counter += 1;
        console.log(count);

        setCounter((prev) => prev + 1);
    }

    return (
        <div>
        <p>Count: { counter }</p>
        <button onClick={increaseCount}>Increase count</button>
    </div>)
   
    
}

