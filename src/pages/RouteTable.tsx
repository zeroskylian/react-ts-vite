import { RouteObject, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
import Category from '@/pages/Home/catrgory';
import User from '@/components/User';

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
    path: '/',
    element: <Navigate replace={false} to={'/home'} />
  }
];

export default routes;
