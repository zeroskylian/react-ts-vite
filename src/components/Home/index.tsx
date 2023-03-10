import './index.css';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div className='content'>
      <Nav />
      sss
      <Outlet />
      sss
    </div>
  );
}
