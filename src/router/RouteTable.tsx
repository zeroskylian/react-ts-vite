import { RouteObject, Navigate } from 'react-router-dom';
import Home from '@/feature/Home';
import Category from '@/feature/Home/Catrgory';
import Discuss from '@/feature/Discuss';
import User from '@/feature/User';
import Counter from '@/feature/Counter';
import Activiy from '@/feature/Activity';
import Pseudo from '@/feature/Pseudo';

const routes: RouteObject[] = [
  {
    path: 'home',
    element: <Home />,
    children: [
      {
        path: 'category/:id',
        element: <Category />
      },
      {
        path: '',
        element: <Navigate replace={true} to={'category/comprehensive'} />
      }
    ]
  },
  {
    path: '/discuss',
    element: <Discuss />
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
    path: '/pseudo-classes',
    element: <Pseudo />
  },
  {
    path: '/',
    element: <Navigate replace={false} to={'/home'} />
  }
];

export default routes;
