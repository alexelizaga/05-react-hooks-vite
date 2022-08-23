import { useCallback, useState, useEffect } from 'react';

import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
      () => {
        setCounter( (value) => value + 1 );
      },
      [],
    )

    useEffect(() => {
        // increment();
    }, [ increment ])
    

    // const increment = () => {
    //     setCounter( prev => prev + 1 );
    // }

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            < ShowIncrement increment={ increment } />
        </>
        
    )

}
