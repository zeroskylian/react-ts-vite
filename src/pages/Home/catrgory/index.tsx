import React from 'react';
import { useMatch } from 'react-router-dom';

export default function Category() {
  const match = useMatch('/home/category/:id');
  console.log(match);
  return <div>{match?.params.id}</div>;
}
