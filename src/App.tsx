import {
  Provider,
  sharedStore,
  sharedStore1,
  useStore,
  getName
} from './store/zustand_context';
import { shallow } from 'zustand/shallow';
import { createStore } from 'zustand';
import './App.css';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import { useState } from 'react';

function App() {
  return (
    <div>
      <Provider createStore={sharedStore}>
        <div className='box'>
          <A></A>
          <B></B>
          <C></C>
        </div>
      </Provider>
      <Other />
    </div>
  );
}

export default App;

// 使用初始值初始化 store
function App1() {
  const store = useStore(getName, shallow);
  const [name] = useState('lian');
  return (
    <Provider
      createStore={() =>
        createStore(() => {
          return {
            ancestor: name,
            ai: { count: 0 },
            bi: { count: 0 },
            ci: { count: 0 }
          };
        })
      }
    >
      <div className='box'>
        {store.ancestor}
        <A></A>
        <B></B>
        <C></C>
      </div>
    </Provider>
  );
}

const Other: React.FC = () => {
  try {
    const store = useStore();
    return <div>{store.ancestor ?? ''}</div>;
  } catch (error) {
    return <div>error</div>;
  }
};
