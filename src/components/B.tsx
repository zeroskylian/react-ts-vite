import React, { useContext } from 'react';
import Counter from './Counter';
import { Button } from 'antd';
import { useStore, useStoreApi, getBI } from '../store/zustand_context';
import { shallow } from 'zustand/shallow';

export default function B() {
  return (
    <div className='box'>
      B
      <Add />
    </div>
  );
}

function Add() {
  const store = useStore(getBI, shallow);
  const api = useStoreApi();
  console.log('B render');
  return (
    <div>
      <Counter name={'B'} count={store.count} />
      <Button
        onClick={() => {
          api.setState({
            bi: {
              count: store.count + 1
            }
          });
        }}
      >
        +1
      </Button>
    </div>
  );
}
