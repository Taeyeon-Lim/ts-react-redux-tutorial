import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
// todos 리듀서 추가하기
import todosReducer from './todosSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
