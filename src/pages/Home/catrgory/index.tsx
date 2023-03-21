import React, {
  HtmlHTMLAttributes,
  useEffect,
  useReducer,
  useRef
} from 'react';
import { useMatch } from 'react-router-dom';

export default function Category() {
  const match = useMatch('/home/category/:id');
  const refs = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (refs.current) {
      refs.current.focus();
    }
  });

  return (
    <div>
      {match?.params.id}
      <hr />
      <input ref={refs} type='text' />
    </div>
  );
}
