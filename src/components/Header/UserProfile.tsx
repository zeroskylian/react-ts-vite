import { useState } from 'react';

export default function UserProfile() {
  const [value, setValue] = useState(0);
  return (
    <div className='userProfle'>
      UserProfile
      {value}
    </div>
  );
}
