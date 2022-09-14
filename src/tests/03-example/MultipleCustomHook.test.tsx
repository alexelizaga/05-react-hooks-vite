import { render, screen } from '@testing-library/react';

import { MultipleCustomHooks } from '../../03-examples';

describe('Test <MultipleCustomHook />', () => {
    
    test('should render default component', () => {

        render( <MultipleCustomHooks /> );

        screen.debug();
        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes') );

        const nextButton: HTMLButtonElement = screen.getByRole('button', { name: 'Next quote' });
        expect( nextButton.disabled ).toBeTruthy();
        

    })

});