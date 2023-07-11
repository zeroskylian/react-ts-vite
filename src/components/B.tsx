import React, { useContext } from 'react';
import Counter from './Counter';
import { Button } from 'antd';
import { useStore } from '../store';
import { produce } from 'immer';
import { getBI } from '../store';
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
  console.log('B render');
  return (
    <div>
      <Counter name={'B'} count={store.count} />
      <Button
        onClick={() => {
          useStore.setState({
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
