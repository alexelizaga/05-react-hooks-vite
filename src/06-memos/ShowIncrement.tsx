import React from 'react';

interface ShowIncrementProps {
    increment: ( value: number ) => void;
}

export const ShowIncrement =  React.memo( ({ increment }: ShowIncrementProps) => {

    console.log(' I rendered again :( ');

    return (
        <button
            className="btn btn-primary"
            onClick={ () => { increment( 5 ) } }
        >
            Increment
        </button>
    )
})
