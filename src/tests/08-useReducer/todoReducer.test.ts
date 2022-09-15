import { todoReducer } from '../../08-useReducer/todoReducer';


describe('Test todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]

    test('should return initial state', () => {

        const newState = todoReducer( initialState, {});
        expect( newState ).toBe( initialState );

    })

    test('should add Todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'New Todo',
                done: false,
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );

    })

    test('should delete Todo', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: {
                id: 1,
                description: 'Demo Todo',
                done: false,
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 );

    })

    test('should toggle todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: {
                id: 1,
                description: 'Demo Todo',
                done: false,
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBe( true );

        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBe( false );
    })

})