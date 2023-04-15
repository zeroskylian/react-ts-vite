import React from 'react';
import { NavLink } from 'react-router-dom';

type NavItemProp = { id: string; name: string; icon: string };
const dataSource: NavItemProp[] = [
  { id: 'comprehensive', name: '关注', icon: 'icon-favorites' },
  { id: 'front', name: '前端', icon: 'icon-message-reply-template' },
  { id: 'end', name: '后端', icon: 'icon-company-fill' },
  { id: 'Android', name: 'Android', icon: 'icon-a-business-icon-Bigpromotion' },
  { id: 'iOS', name: 'iOS', icon: 'icon-charts-pie' },
  {
    id: 'artificial intelligence',
    name: '人工智能',
    icon: 'icon-customer-group'
  },
  { id: 'development tools', name: '开发工具', icon: 'icon-zoom-in' }
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

function NavItem(props: NavItemProp) {
  return (
    <NavLink
      className={(isActive) => {
        return isActive.isActive
          ? 'content-nav-item-active'
          : 'content-nav-item';
      }}
      to={`category/${props.id}`}
    >
      <span className={`iconfont ${props.icon}`}>{}</span>
      {props.name}
    </NavLink>
  );
}
