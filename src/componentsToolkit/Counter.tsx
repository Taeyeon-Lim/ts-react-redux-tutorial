import React from 'react';
import {
  decrease,
  increase,
  incrementByAmount,
  selectCount,
} from '../modulesToolkit/counterSlice';
import { useAppDispatch, useAppSelector } from '../modulesToolkit/hooks';

function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(incrementByAmount(diff));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      {/* 컴파일 과정에서 실행시키지 않기 위해 익명 함수 사용 */}
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}

export default Counter;
