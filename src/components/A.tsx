import { Button } from 'antd';
import Counter from './Counter';
import { useStore } from '../store/store';
import { produce } from 'immer';
import { shallow } from 'zustand/shallow';
import { getAI } from '../store/store';
import { count } from 'console';

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
  console.log('A render');
  return (
    <div>
      <Counter name={'A'} count={store.count} />
      <Button
        onClick={() => {
          // useStore.setState(
          //   produce(store, (draft) => {
          //     draft.count += 1;
          //   })
          // );

          useStore.setState({
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
