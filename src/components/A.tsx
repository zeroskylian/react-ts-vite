import React, { useContext } from 'react';
import { Button } from 'antd';
import ancestorContext, { AContext } from '../context';
import Counter from './Counter';

export default function A() {
  const context = useContext(ancestorContext);

  return (
    <AContext.Provider value={{ ...context!.ai, dispatch: context?.dispatch }}>
      <div className='box'>
        A
        <Add />
      </div>
    </AContext.Provider>
  );
}

function Add() {
  const value = useContext(AContext);
  console.log('A render');
  return (
    <div>
      <Counter name={'A'} count={value!.count} />
      <Button
        onClick={() => {
          value?.dispatch!('A');
        }}
      >
        +1
      </Button>
    </div>
  );
}
