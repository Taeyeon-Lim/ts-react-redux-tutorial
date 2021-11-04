// [ const assertion ]이란?
// export const increase <= 커서를 올리면 "string"이므로, 타입 추론의 범위를 좁혀주기 위해 [as const] 사용!
// const INCREASE = 'counter/INCREASE';
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

// ReturnType 유틸 : 특정 함수의 결과물을 받아올 수 있음
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

// 리듀서 생성 ( 사전에 타입 정의 필요: CounterState, CounterAction )
function counter(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      // 특정 action에 어떤 값이 있고, 어떤 타입의 프로퍼티인지 확인 가능
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
