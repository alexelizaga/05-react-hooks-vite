import { fireEvent, render, screen } from '@testing-library/react';

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

    test('should render Todo pending to do', () => {

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

    test('should render Todo done', () => {

        todo.done = true;

        render(
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).toContain('text-decoration-line-through');

        // screen.debug();

    })

    test('should call onToggleTodo when span is clicked', () => {

        render(
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toBeCalledWith( todo );

    })

    test('should call onDeleteTodo when delete button is clicked', () => {

        render(
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );

        expect( onDeleteTodoMock ).toBeCalledWith( todo );

    })

})