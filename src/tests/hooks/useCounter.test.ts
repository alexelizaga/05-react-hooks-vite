import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../hooks';


describe('Test useCounter', () => {

    test('should return default values', () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );

    })

    test('should generate a counter with initial value 100', () => {

        const { result } = renderHook( () => useCounter(100) );
        expect( result.current.counter ).toBe(100);

    })

    test('should increment counter', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act( () => {
            increment();
            increment(2);
        });

        expect( result.current.counter ).toBe(103);

    })

    test('should decrement counter', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            decrement();
            decrement(2);
        });

        expect( result.current.counter ).toBe(97);

    })

    test('should reset counter', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { decrement, reset } = result.current;

        act( () => {
            decrement();
            reset();
        });

        expect( result.current.counter ).toBe(99);

    })

})