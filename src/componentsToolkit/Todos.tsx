import { useAppDispatch, useAppSelector } from '../modulesToolkit/hooks';
import {
  addTodo,
  removeTodo,
  selectTodos,
  toggleTodo,
} from '../modulesToolkit/todosSlice';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function Todos() {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };
  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };
  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

export default Todos;
