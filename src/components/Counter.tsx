import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { decrease, increase, increaseBy } from '../modules/counter';

// type CounterProps = {
//   count: number;
//   onIncrease: () => void;
//   onDecrease: () => void;
//   onIncreaseBy: (diff: number) => void;
// };

function Counter() {
  // 리덕스 내부 상태도 자동 완성이 잘 됨
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
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
