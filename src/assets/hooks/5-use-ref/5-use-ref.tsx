import { useRef } from 'react';

export const RefExample = () => {
    const onClick = () => {
        inputRef.current.focus();
    }
    const inputRef = useRef<HTMLInputElement>(null);
    return (<div>
        <input type="text" ref={inputRef}></input>
        <button onClick={onClick}>Log here</button>
        </div>
    )
}