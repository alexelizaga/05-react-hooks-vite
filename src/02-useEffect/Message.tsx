import { useEffect, useState } from 'react';

export const Message = () => {

    const [ coords, setCoords ] = useState({ x: 0, y: 0 });

    useEffect( () => {

        window.addEventListener('mousemove', onMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }

    }, []);

    const onMouseMove = ({ x, y }: MouseEvent) => {
        setCoords({ x, y });
    }

    return (
        <>
            <h3>User exist</h3>
            {
                JSON.stringify(coords)
            }
        </>
    )
}
