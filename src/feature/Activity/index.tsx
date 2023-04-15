import React, { useState, useCallback } from 'react';

export default function Activiy() {
  const [count, setCount] = useState<number>(0);
  const [salary, setSalary] = useState<number>(0);

  const countAction = useCallback(() => {
    setCount((count) => {
      return count + 1;
    });
  }, []);

  const salaryAction = useCallback(() => {
    setSalary((count) => {
      return count + 1;
    });
  }, []);

  return (
    <div className='activiy'>
      <TitleMemo />
      <CounterMemo handleClick={countAction}>People</CounterMemo>
      <DisplayMemo title='People' count={count} />

      <CounterMemo handleClick={salaryAction}>Salary</CounterMemo>
      <DisplayMemo title='Salary' count={salary} />
    </div>
  );
}

function Title() {
  console.log('Rendering Title');
  return <h2>useCallback</h2>;
}

const TitleMemo = React.memo(Title);

function Display(props: { title: string; count: number }) {
  console.log(`Rendering Display ${props.title}`);
  return (
    <div>
      {props.title} -- {props.count}
    </div>
  );
}
const DisplayMemo = React.memo(Display);

function Counter(props: { handleClick: () => void; children: string }) {
  console.log(`Rendering Counter ${props.children}`);
  return <button onClick={props.handleClick}>{props.children}</button>;
}
const CounterMemo = React.memo(Counter);
