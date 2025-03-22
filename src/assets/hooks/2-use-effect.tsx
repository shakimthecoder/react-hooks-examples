import { useEffect } from 'react';

export default function EffectExample() {
   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json()
    .then((json) => console.log(json)))
   }, [])

    return( <div>
        {""}
        <h1>Posts</h1>
            <ul>
                <li>Post 1</li>
                <li>Post 2</li>
                <li>Post 3</li>
                <li>Post 4</li>
                <li>Post 5</li>
            </ul>
            </div>
        )
}