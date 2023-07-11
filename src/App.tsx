import React, { useReducer } from 'react';
import './App.css';
import AncestorContext, { initialValue, Ancestor } from './context';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import { produce } from 'immer';

const reducer = (state: Ancestor, action: string) => {
  switch (action) {
    case 'A':
      const val = produce(state, (draft) => {
        draft.ai.count += 1;
      });
      return val;
    case 'B':
      return produce(state, (draft) => {
        draft.bi.count += 1;
      });
    case 'C':
      return produce(state, (draft) => {
        draft.ci.count += 1;
      });
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <AncestorContext.Provider value={{ ...state, dispatch }}>
      <div className='box'>
        {initialValue.ancestor}
        <A></A>
        <B></B>
        <C></C>
      </div>
    </AncestorContext.Provider>
  );
}

export default App;

const myReducer = (state: { count: number }, action: string) => {
  switch (action) {
    case 'countUp':
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
};
