
export const todoReducer = ( initialState = [], action: any ) => {

    switch (action?.type) {
        case 'ABC':
            throw new Error('Action.type = ABC is not implemented');
        default:
            return initialState;
    }
}