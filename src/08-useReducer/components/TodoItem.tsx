import { Todo } from '../Todo';

type TodoItemProps = {
    todo: Todo;
    onDeleteTodo: (todo: Todo) => void;
    onToggleTodo: (todo: Todo) => void;
}

export const TodoItem = ( { todo, onDeleteTodo, onToggleTodo }: TodoItemProps ) => {
  return (
    <>
        <li className="list-group-item d-flex justify-content-between">
            <span
              className={`align-self-center ${ todo.done ? 'text-decoration-line-through' : '' }`}
              onClick={ () => onToggleTodo( todo ) }
            >{ todo.description }</span>
            <button
              className="btn btn-danger"
              onClick={ () => onDeleteTodo( todo ) }
            >Borrar</button>
        </li>
    </>
  )
}
