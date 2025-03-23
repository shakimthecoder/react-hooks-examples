import { useState, useEffect, useRef } from 'react';

export const LayoutEffectExample = () => {
    const [width, setWidth] = useState(0);
    const boxRef = useRef(null);

    useEffect(() => {
        if(boxRef.current){
            setWidth(boxRef.current)
        }
    })
    return (
            <div
             ref={boxRef}
             style={{
                width: "90%",
                height: "100px",
                backgroundColor: "lightblue"

             }}
             >  Resize me!
            <div>
             <p>The width is: {width} px </p>
             </div>
            </div>
            
    )
}