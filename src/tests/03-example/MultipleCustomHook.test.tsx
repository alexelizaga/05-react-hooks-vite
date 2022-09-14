import { fireEvent, render, screen } from '@testing-library/react';

import { MultipleCustomHooks } from '../../03-examples';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

jest.mock('../../hooks/useFetch')
jest.mock('../../hooks/useCounter')

describe('Test <MultipleCustomHook />', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    beforeEach( () => {
        jest.clearAllMocks();
    })
    
    test('should render default component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes') );

        const nextButton: HTMLButtonElement = screen.getByRole('button', { name: 'Next quote' });
        expect( nextButton.disabled ).toBeTruthy();
        
    })

    test('should show one Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Alex', quote: 'Hello world' }],
            isLoading: false,
            hasError: null
        })

        render( <MultipleCustomHooks /> );
        expect( screen.getByText('Hello world') ).toBeTruthy();
        expect( screen.getByText('Alex') ).toBeTruthy();

        const nextButton: HTMLButtonElement = screen.getByRole('button', { name: 'Next quote' });
        expect( nextButton.disabled ).toBeFalsy();
    
    })

    test('should call increment function', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Alex', quote: 'Hello world' }],
            isLoading: false,
            hasError: null
        })

        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', { name: 'Next quote'} );
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    })

});