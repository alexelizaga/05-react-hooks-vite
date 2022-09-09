import { useReducer } from 'react';

import { todoReducer } from './todoReducer';

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

    return (
        <>
            <h1>TodoApp: { todos.length }, <small>pendientes: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        {
                            todos.map( todo => (
                                <li key={ todo.id } className="list-group-item d-flex justify-content-between">
                                    <span className="align-self-center">{ todo.description }</span>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>
                            ) )
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Add TODO</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            placeholder="What to do?"
                            className="form-control"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1"
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>

            
        </>
    )

}
