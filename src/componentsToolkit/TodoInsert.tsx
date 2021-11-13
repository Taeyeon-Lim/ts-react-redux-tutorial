import React, { useState } from 'react';

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

function TodoInsert({ onInsert }: TodoInsertProps) {
  const [text, setText] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInsert(text);
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder='할 일을 입력하세요.'
        value={text}
        onChange={onChange}
      />
      <button type='submit'>등록</button>
    </form>
  );
}

export default TodoInsert;
