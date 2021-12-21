import React from 'react';
import styles from './App.module.scss';
import Todos from './componentsToolkit/Todos';
import Counter from './componentsToolkit/Counter';

function App() {
  return (
    <>
      <Counter />
      <div className={styles.App}>
        <h1>투두리스트</h1>
        <Todos />
      </div>
    </>
  );
}

export default App;
