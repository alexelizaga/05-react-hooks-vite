import { useState } from 'react';

export const useCounter = ( initialValue: number = 10) => {
    const [counter, setCounter] = useState<number>( initialValue );
    
    const increment = ( value = 1 ) => setCounter(counter + value);
    const decrement = ( value = -1 ) => {
        if ( counter === 0 ) return;
        setCounter(counter - value)
    };
    const reset: () => void = () => setCounter(initialValue);
    
    return { counter, increment, decrement, reset };
}