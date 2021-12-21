import { render, fireEvent } from '@testing-library/react';
import TodoInsert from './TodoInsert';

describe('<TodoInsert />', () => {
  it('init Todos', () => {
    const onInsert = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <TodoInsert onInsert={onInsert} />
    );
    getByPlaceholderText('할 일을 입력하세요.');
    getByText('등록');
  });

  it('changes input', () => {
    const onInsert = jest.fn();
    const { getByPlaceholderText } = render(<TodoInsert onInsert={onInsert} />);
    const input = getByPlaceholderText('할 일을 입력하세요.');
    fireEvent.change(input, {
      target: { value: 'TDD' },
    });

    expect(input).toHaveAttribute('value', 'TDD');
  });

  it('onInsert', () => {
    const onInsert = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <TodoInsert onInsert={onInsert} />
    );
    const input = getByPlaceholderText('할 일을 입력하세요.');
    const button = getByText('등록');

    fireEvent.change(input, {
      target: {
        value: 'TDD 2',
      },
    });
    fireEvent.click(button);
    
    expect(onInsert).toBeCalledWith('TDD 2');
    expect(input).toHaveAttribute('value', '');
  });
});
