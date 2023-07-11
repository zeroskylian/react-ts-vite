import React, { useContext } from 'react';
import Counter from './Counter';
import { Button } from 'antd';
import { useStore } from '../store';
import { produce } from 'immer';
import { getCI } from '../store';
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
  console.log('C render');
  return (
    <div>
      <Counter name={'C'} count={store.count} />
      <Button
        onClick={() => {
          useStore.setState({
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
