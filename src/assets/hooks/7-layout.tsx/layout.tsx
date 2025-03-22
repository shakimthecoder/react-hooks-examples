import { useState, useEffect, useRef } from 'react';

const LayoutEffectExample = () => {
    const [width, setWidth] = useState(0);
    const boxRef = useRef(null);

    useEffect(() => {
        if(boxRef.current){
            setWidth(boxRef.current)
        }
    })
    return (
        <div>
            <div
             ref={boxRef}
             style={{
                width: "90%",
                height: "100px",
                backgroundColor: "lightblue"

             }}> 
                <p>The box width is {width}px</p>
            </div>
        </div>
    )
}