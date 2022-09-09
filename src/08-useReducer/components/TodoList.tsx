import { Todo } from '../Todo';
import { TodoItem } from './';

type TodoListProps = {
    todos: Todo[];
    onDeleteTodo: (todo: Todo) => void;
    onToggleTodo: (todo: Todo) => void;
}

export const TodoList = ( { todos, onDeleteTodo, onToggleTodo }: TodoListProps ) => {
  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <TodoItem
                  key={ todo.id }
                  todo={ todo }
                  onDeleteTodo={ onDeleteTodo }
                  onToggleTodo={ onToggleTodo }
                />
            ) )
        }
    </ul>
  )
}
