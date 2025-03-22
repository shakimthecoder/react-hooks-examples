import { useState, useContext, createContext } from 'react';

/*

export const GlobalStateContext  = createContext<null>(null)>;

export const ContextExample = () => {
    let [isToggle, setisToggle] = useState<boolean>(false);
   return (
    <GlobalStateContext.Provider value={{isToggle, setisToggle}}>
        <div>
        <h1>Parent Element</h1>
        <ChildToggle setisToggle={setisToggle} />
        <ChildDisplay isToggle={isToggle} />
        </div>
        </GlobalStateContext.Provider>
)
}

const ChildToggle = () => {
    const { setisToggle } = useContext(GlobalStateContext);
     return(
        <div>
        <button onClick={() => setisToggle((prev => !prev))}>Toggle State</button>
        </div>
     )}

const ChildDisplay = ({ isToggle }: { isToggle: boolean }) => {
    return(
        <div>Current State {isToggle ? "ON" : "OFF"}</div>

    )
}
*/