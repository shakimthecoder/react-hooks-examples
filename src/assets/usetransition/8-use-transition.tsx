import { useTransition, useState } from 'react';

export const useTransitionExample = () => {
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const [isPending, startTransition] = useTransition();
    const items = Array.from({ length: 10000 }, (_,i) => `Item ${i + 1}`);
    const handleFilter = (e) => {
        const value = e.target.value;
        setQuery(value);
    }
    startTransition(() => {
    const filtered: any = items.filter((item) =>
        item.toLowerCase().includes(item.valueOf()));
        setFilteredItems(filtered);
    });
    
    return (
        <div>
        <input 
         type="text"
         value={query}
         onChange={handleFilter}
         placeholder="Search items..."
         >
          <ul>
            {filteredItems.map((item, index) => (<li key={index}>{item}</li> 
            )}
            </ul>
         </input>
        </div>
    )

}
