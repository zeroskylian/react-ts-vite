import React, { useContext } from 'react';
import Counter from './Counter';
import { Button } from 'antd';
import { useStore, useStoreApi, getCI } from '../store/zustand_context';
import { shallow } from 'zustand/shallow';

export default function C() {
  return (
    <div className='box'>
      C
      <Add />
    </div>
  );
}
function Add() {
  const store = useStore(getCI, shallow);
  const api = useStoreApi();
  console.log('C render');
  return (
    <div>
      <Counter name={'C'} count={store.count} />
      <Button
        onClick={() => {
          api.setState({
            ci: {
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
