import { useState, useEffect, useSyncExternalStore} from 'react';
/*
export const useExternalSyncExample = () => {
    const [pokemons, setPokemons] = useState([]);
    const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);


    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto?limit=10');
    
             const data = response.json();
             setPokemons(data.results);
        };
        fetchPokemon();
    }), [];
    
    return (
         <div>
            <h1>
                <ul>{pokemons.length === o ? (
                    <p>Loading....</p> : 
                ) : (
                  pokemons.map((pokemon, index)) => <li key={index}>{pokemons.name}</li>
                 )}
            </ul>
            </h1>
         </div>
    );


*/