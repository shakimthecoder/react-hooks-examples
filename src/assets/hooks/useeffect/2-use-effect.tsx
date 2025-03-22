import { useState, useEffect } from 'react';

export default function EffectExample() {
    let [data, setData] = useState<[]>([]);
   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json()
    .then((json) => setData(json)))
   }, [])

    return( <div>
        {""}
        <h1>Posts</h1>
            <ul>
             {data.map((item: any) => (
             <li>{item.title}</li>
             ))}
            </ul>
            </div>
        )
}