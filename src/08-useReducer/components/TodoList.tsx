import { Todo } from '../Todo';
import { TodoItem } from './';

type TodoListProps = {
    todos: Todo[]
}

export const TodoList = ( { todos }: TodoListProps ) => {
  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <TodoItem key={ todo.id } todo={ todo } />
            ) )
        }
    </ul>
  )
}
