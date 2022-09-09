import { useReducer } from 'react';

import { todoReducer } from './todoReducer';
import { TodoAdd } from './components';
import { TodoList } from './components';
import { Todo } from './Todo';

const initialState: any  = [
    {
        id: new Date().getTime(),
        description: 'Collect the soul stone',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Collect the power stone',
        done: false,
    }
]

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState );

    const handleNewTodo = ( todo: Todo ) => {
        console.log( todo );
    }

    return (
        <>
            <h1>TodoApp: { todos.length }, <small>pendientes: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos } />
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
