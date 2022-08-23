import React from 'react';

interface ShowIncrementProps {
    increment: () => void;
}

export const ShowIncrement =  React.memo( ({ increment }: ShowIncrementProps) => {

    console.log(' I rendered again :( ');

    return (
        <button
            className="btn btn-primary"
            onClick={ () => { increment() } }
        >
            Increment
        </button>
    )
})
