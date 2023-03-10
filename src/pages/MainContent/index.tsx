import { useRoutes } from 'react-router-dom';
import RouteTable from '../RouteTable';

export default function MainContent() {
  const element = useRoutes(RouteTable);
  return <div>{element}</div>;
}
