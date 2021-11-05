import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
// 리덕스 스토어를 위한 타입 설정
export type RootState = ReturnType<typeof rootReducer>;
