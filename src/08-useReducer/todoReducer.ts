import { Todo } from './Todo';

export interface TodoState extends Array<Todo>{}

export const todoReducer = ( initialState: TodoState = [], action: { type: string, payload: Todo } ) => {

    switch (action?.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ]
        default:
            return initialState;
    }
}