import React from 'react';
import { Todo } from '../modulesToolkit/todosSlice';
import styles from './Todos.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  const handleToggle = () => onToggle(todo.id);
  const handleRemove = () => onRemove(todo.id);

  return (
    <li>
      <span onClick={handleToggle} className={cx('text', { done: todo.done })}>
        {todo.text}
      </span>
      <span onClick={handleRemove} className={cx('removeButton')}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;
