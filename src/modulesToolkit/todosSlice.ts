import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../modulesToolkit';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];

const initialState = [] as TodosState;
let nextId = 1;

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      // Immer 라이브러리가 탑재되어 있기 때문에, push의 사용이 가능
      state.push({ id: nextId++, text: action.payload, done: false });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) todo.done = !todo.done;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
