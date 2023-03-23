import { RouteObject, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
import Category from '@/pages/Home/catrgory';
import Counter from '@/components/Counter';
import User from '@/components/User';
import Activiy from '@/components/Activity';

const routes: RouteObject[] = [
  {
    path: 'home',
    element: <Home />,
    children: [
      {
        path: 'category/:id',
        element: <Category />
      }
    ]
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/activity',
    element: <Activiy />
  },
  {
    path: '/',
    element: <Navigate replace={false} to={'/home'} />
  }
];

export default routes;
