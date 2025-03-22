import { useRef } from 'react';

export const RefExample = () => {
    const onClick = () => {
        console.log(inputRef.current.value);
    }
    const inputRef = useRef<HTMLInputElement>(null);
    return (<div>
        <input type="text" ref={inputRef}></input>
        <button onClick={onClick}></button>
        </div>
    )
}