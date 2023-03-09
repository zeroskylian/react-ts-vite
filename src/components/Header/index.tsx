import './index.css';
import Logo from './Logo';
import Nav from './Nav';
import UserProfile from './UserProfile';

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Nav />
      <UserProfile />
    </div>
  );
}
