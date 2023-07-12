import { Button } from 'antd';
import Counter from './Counter';
import { useStore, useStoreApi, getAI } from '../store/zustand_context';
import { shallow } from 'zustand/shallow';

export default function A() {
  return (
    <div className='box'>
      A
      <Add />
    </div>
  );
}

function Add() {
  const store = useStore(getAI, shallow);
  const api = useStoreApi();
  console.log('A render');
  return (
    <div>
      <Counter name={'A'} count={store.count} />
      <Button
        onClick={() => {
          api.setState({
            ai: {
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
