import { useid } from 'react';

export const useIdExample = () => {
    return (
        <div>
        <label htmlfor={"input-1"}>Enter your name:</label>
        <input id={"input-1"} type="text"></input>
        </div>
    )
}