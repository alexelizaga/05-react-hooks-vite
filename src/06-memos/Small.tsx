import { memo } from 'react';

interface SmallProps {
    value: number;
}

export const Small = memo(({ value }: SmallProps) => {

    console.log('Me volví a dibujar')

    return (
        <small>{ value }</small>
    )

})
