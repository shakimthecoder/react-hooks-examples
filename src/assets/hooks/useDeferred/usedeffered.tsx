import { useTransition, useDeferredValue, useState } from 'react';
// 
export const useDeferredExample = () => {
const [query, setQuery] = useState()
 const deferredQuery = useDeferredValue(query);

// not doing data filtering but the point is shown in the ternary statement

 return (
    <div>
        <input 
         type="text"
         value={query}
         placeholder="Cooking..."
         >
        {deferredQuery !== query && <p>Loading....</p>}
         </input>
    
    </div>
 )
}