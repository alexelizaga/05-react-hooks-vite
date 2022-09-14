import { renderHook, act } from '@testing-library/react';

import { useForm } from '../../hooks';

describe( 'Test useCounter', () => {

    const initialForm = {
        name: 'Alex',
        email: 'alex@google.com'
    }

    test('should return default values', () => {

        const { result } = renderHook( () => useForm( initialForm ) );

        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            form:  initialForm,
            onChange: expect.any( Function ),
            setFormValue: expect.any( Function ),
            onReset: expect.any( Function )
        })
    })

    test('should change form name', () => {

        const newValue = 'Juan';
    
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onChange } = result.current;

        act( () => {
            onChange( newValue, 'name' );
        } )

        expect( result.current.name ).toBe( newValue );
        expect( result.current.form.name ).toBe( newValue );
    })

    test('should reset form', () => {

        const newValue = 'Juan';
    
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onChange, onReset } = result.current;

        act( () => {
            onChange( newValue, 'name' );
            onReset();
        } )

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.form.name ).toBe( initialForm.name );
    })

} )