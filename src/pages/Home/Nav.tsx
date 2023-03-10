import React from 'react';
import { NavLink } from 'react-router-dom';

const dataSource: { id: string; name: string }[] = [
  { id: 'comprehensive', name: '关注' },
  { id: 'front', name: '前端' },
  { id: 'end', name: '后端' },
  { id: 'Android', name: 'Android' },
  { id: 'iOS', name: 'iOS' },
  {
    id: 'artificial intelligence',
    name: '人工智能'
  },
  { id: 'development tools', name: '开发工具' }
];

export default function Nav() {
  return (
    <div className='content-nav'>
      {dataSource.map((data) => {
        return <NavItem key={data.id} {...data} />;
      })}
    </div>
  );
}

function NavItem(props: { id: string; name: string }) {
  return (
    <NavLink
      className={(isActive) => {
        return isActive.isActive
          ? 'content-nav-item-active'
          : 'content-nav-item';
      }}
      to={`category/${props.id}`}
    >
      {props.name}
    </NavLink>
  );
}
