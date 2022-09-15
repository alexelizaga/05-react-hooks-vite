import { render, screen, fireEvent } from '@testing-library/react';

import { UserContext } from '../../09-useContext/context/UserContext';
import { LoginPage } from '../../09-useContext/LoginPage';


describe('first', () => {


    test('should render component without user', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag: HTMLElement = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');

        // screen.debug();
    });

    test('should call setUser when button is clicked', () => {

        const setUserMock: jest.Mock<any, any> = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const button: HTMLElement = screen.getByRole('button');
        fireEvent.click( button );        

        expect( setUserMock ).toBeCalledWith({
            id: 123,
            email: 'bob@google.com',
            name: 'Bob'
        });


        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');

    });

})