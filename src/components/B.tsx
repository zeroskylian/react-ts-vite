import React, { useContext } from 'react';
import ancestorContext, { BContext } from '../context';
import Counter from './Counter';
import { Button } from 'antd';

export default function B() {
  const context = useContext(ancestorContext);

  return (
    <BContext.Provider value={{ ...context.bi, dispatch: context?.dispatch }}>
      <div className='box'>
        B
        <Add />
      </div>
    </BContext.Provider>
  );
}

function Add() {
  const value = useContext(BContext);
  console.log('B render');
  return (
    <div>
      <Counter name={'B'} count={value!.count} />
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
