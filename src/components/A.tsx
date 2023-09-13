import React, { useContext, useMemo } from 'react';
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
  let allPrimes = useMemo(() => {
    return value?.count;
  }, [value?.count]);
  console.log('A render');
  return (
    <div>
      <Counter name={'A'} count={allPrimes ?? 0} />
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
