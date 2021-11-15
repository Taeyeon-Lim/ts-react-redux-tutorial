import React from 'react';
import styles from './App.module.scss';
import Todos from './componentsToolkit/Todos';

function App() {
  return (
    <div className={styles.App}>
      <h1>투두리스트</h1>
      <Todos />
    </div>
  );
}

export default App;
