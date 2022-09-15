import { render, screen } from '@testing-library/react';

import { UserContext } from '../../09-useContext/context/UserContext';
import { HomePage } from '../../09-useContext/HomePage';


describe('Test <HomePage />', () => {

    const user = {
        id: 123,
        name: 'Alex Elízaga',
        email: 'alex@google.com'
    }

    test('should render component without user', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
            
        )

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');

        // screen.debug();
    });

    test('should render component with user', () => {

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
            
        )

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain( `${ user.id }` );
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.email );

        // screen.debug();
    });

});