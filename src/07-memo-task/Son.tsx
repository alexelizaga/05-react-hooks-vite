import React from 'react';

interface SonProps {
    number: number;
    increment: (number: number) => void;
}

export const Son = React.memo(({ number, increment }: SonProps) => {

    console.log('  I just rendered again :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => increment( number ) }
        >
            { number }
        </button>
    )
})
