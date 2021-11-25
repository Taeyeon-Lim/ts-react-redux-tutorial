import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Counter from './Counter';
import { store } from '../modulesToolkit/index';

function renderCounter() {
  const utils = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  const GetByText = (text: string) => utils.getByText(text);

  return {
    ...utils,
    GetByText,
  };
}

describe('Counter Component', () => {
  it('초기 <Counter />', () => {
    const { container } = renderCounter();

    expect(container).toMatchSnapshot();
  });

  it('버튼, 숫자 존재 유무', () => {
    const { GetByText } = renderCounter();

    expect(GetByText('0')).toBeInTheDocument();
    expect(GetByText('+1')).toBeInTheDocument();
    expect(GetByText('-1')).toBeInTheDocument();
    expect(GetByText('+5')).toBeInTheDocument();
  });

  it('<= Count + 2 =>', () => {
    const { GetByText, container } = renderCounter();
    const count = GetByText('0');
    const plusButton = GetByText('+1');

    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    expect(count).toHaveTextContent('2');
    expect(count.textContent).toBe('2');
    expect(container).toMatchSnapshot();
  });

  it('<= Count - 2 =>', () => {
    const { GetByText, container } = renderCounter();
    const count = GetByText('2');
    const minusButton = GetByText('-1');

    fireEvent.click(minusButton);

    expect(count).toHaveTextContent('1');
    expect(count.textContent).toBe('1');
    expect(container).toMatchSnapshot();
  });
});
