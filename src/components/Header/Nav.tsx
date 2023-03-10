import { NavLink } from 'react-router-dom';
const navs: { name: string; path: string }[] = [
  {
    name: '主页',
    path: '/home'
  },
  {
    name: '人员',
    path: '/user'
  }
];

export default function Nav() {
  return (
    <div className='nav'>
      {navs.map((item) => {
        return (
          <NavLink
            key={item.name}
            className={(isActive) => {
              return isActive.isActive ? 'nav-item-active' : 'nav-item';
            }}
            to={item.path}
          >
            {item.name}
          </NavLink>
        );
      })}
    </div>
  );
}
