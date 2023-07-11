import React, { useContext } from 'react';
import ancestorContext, { CContext } from '../context';
import Counter from './Counter';
import { Button } from 'antd';

export default function C() {
  const context = useContext(ancestorContext);

  return (
    <CContext.Provider value={{ ...context.ci, dispatch: context?.dispatch }}>
      <div className='box'>
        C
        <Add />
      </div>
    </CContext.Provider>
  );
}
function Add() {
  const value = useContext(CContext);
  console.log('C render');
  return (
    <div>
      <Counter name={'C'} count={value!.count} />
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
