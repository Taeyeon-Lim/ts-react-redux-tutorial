import TodoItem from '../componentsToolkit/TodoItem';
import { Todo } from '../modulesToolkit/todosSlice';
import styles from './Todos.module.scss';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;
  return (
    <ul className={styles.ul}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default TodoList;
