import { useRef, useImperativeHandle } from 'react'; 

export const ImperativeHandler = () => {
    const inputRef = useRef(null);
    return  (<>
        <CustomInput ref={inputRef} />
        <button onClick={() => inputRef.current.focusInput()}>Focus Input</button>
        <button onClick={() => inputRef.current.clearInput()}>Clear Input</button>
        </>
    )
}

export const CustomInput = forwardRef((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focusInput: () => {
            inputRef.current.focus();
        },
        clearInput: () => {
            inputRef.current.value = "";
        },
    }));

    return(
        <input ref={inputRef} type="text" placeholder='type something'></input>
    )
    });

