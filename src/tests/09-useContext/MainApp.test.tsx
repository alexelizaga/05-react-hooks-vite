import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { MainApp } from '../../09-useContext/MainApp';

describe('Test <MainApp />', () => {

    test('should render HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )

        expect( screen.getByText('HomePage')).toBeTruthy();
    });

    test('should render LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )

        expect( screen.getByText('LoginPage')).toBeTruthy();
    });

    test('should render AboutPage', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        )

        expect( screen.getByText('AboutPage')).toBeTruthy();
    });

});