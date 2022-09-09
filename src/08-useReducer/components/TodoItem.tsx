import { Todo } from '../Todo';

type TodoItemProps = {
    todo: Todo;
    onDeleteTodo: (todo: any) => void;
}

export const TodoItem = ( { todo, onDeleteTodo }: TodoItemProps ) => {
  return (
    <>
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ todo.description }</span>
            <button
              className="btn btn-danger"
              onClick={ () => onDeleteTodo( todo ) }
            >Borrar</button>
        </li>
    </>
  )
}
