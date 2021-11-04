import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
// 리덕스 스토어를 위한 타입 설정
export type RootState = ReturnType<typeof rootReducer>;
