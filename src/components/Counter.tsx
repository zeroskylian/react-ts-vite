import React from 'react';
import { Input } from 'antd';

export default function Counter(value: { name: string; count: number }) {
  return (
    <div>
      <Input name='name' placeholder='name' value={value.name} />
      <Input name='value' placeholder='count' value={value.count} />
    </div>
  );
}
