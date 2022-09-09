import { Todo } from '../Todo';
import { TodoItem } from './';

type TodoListProps = {
    todos: Todo[];
    onDeleteTodo: (todo: Todo) => void;
}

export const TodoList = ( { todos, onDeleteTodo }: TodoListProps ) => {
  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <TodoItem
                  key={ todo.id }
                  todo={ todo }
                  onDeleteTodo={ onDeleteTodo }
                />
            ) )
        }
    </ul>
  )
}
