import { useState, useEffect, useRef } from 'react';

const LayoutEffectExample = () => {
    const [width, setWidth] = useState(0);
    const boxRef = useRef();

    useEffect(() => {
        if(boxRef.current){
            setWidth(boxRef.current.offsetWidth)
        }
    })
    
}