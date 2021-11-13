import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../modulesToolkit/index';

interface CounterState {
  count: number;
}

const initialState = { count: 0 } as CounterState;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: state => {
      state.count += 1;
    },
    decrease: state => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increase, decrease, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.count;

export default counterSlice.reducer;
