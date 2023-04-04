import { NavLink } from 'react-router-dom';
const navs: { name: string; path: string }[] = [
  {
    name: '主页',
    path: '/home'
  },
  {
    name: '人员',
    path: '/user'
  },
  {
    name: '计数器',
    path: '/counter'
  },
  {
    name: '活动',
    path: '/activity'
  },
  {
    name: '伪类选择器',
    path: '/pseudo-classes'
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
