import { Todo } from './Todo';

export interface TodoState extends Array<Todo>{}

export const todoReducer = ( initialState: TodoState = [], action: { type: string, payload: Todo } ) => {

    switch (action?.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload.id );
        default:
            return initialState;
    }
}