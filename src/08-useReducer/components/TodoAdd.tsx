import { Todo } from '../Todo';
import { useForm } from '../../hooks/useForm';


type TodoAddProps = {
    onNewTodo: ( todo: Todo ) => void;
}

export const TodoAdd = ( { onNewTodo }: TodoAddProps ) => {

    const { description, onChange, onReset } = useForm({
        description: ''
    });

    const onFormSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        if ( description.length <= 1 ) return;
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }

        onNewTodo( newTodo );
        onReset();
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input
                type="text"
                placeholder="What to do?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ ({ target }) => onChange(target.value, 'description') }
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Add
            </button>
        </form>
    )
}
