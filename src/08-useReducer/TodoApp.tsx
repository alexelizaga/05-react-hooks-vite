import { useReducer, useEffect } from 'react';

import { todoReducer, TodoState } from './todoReducer';
import { TodoAdd } from './components';
import { TodoList } from './components';
import { Todo } from './Todo';

const initialState: TodoState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Collect the soul stone',
    //     done: false,
    // },
]

const init = () => {
    return JSON.parse( localStorage.getItem('todos') || '' ) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos])
    

    const handleNewTodo = ( todo: Todo ) => {
        const action: { type: string, payload: Todo } = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch( action );
    }

    const handleDeleteTodo = ( todo: Todo ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: todo
        })
    }

    const handleToggleTodo = ( todo: Todo ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: todo
        })
    }

    return (
        <>
            <h1>TodoApp: { todos.length }, <small>pendientes: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={ todos }
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>
                <div className="col-5">
                    <h4>Add TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>
        </>
    )

}
