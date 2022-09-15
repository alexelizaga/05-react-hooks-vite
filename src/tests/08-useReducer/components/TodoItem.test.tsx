import { render, screen } from '@testing-library/react';

import { TodoItem } from '../../../08-useReducer/components';


describe('Test <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Soul stone',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should show Todo ', () => {

        render(
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');

        // screen.debug();

    })

})