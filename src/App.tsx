import { useRoutes } from 'react-router-dom';
import Header from '@/feature/Header';
import RouteTable from '@/router/RouteTable';

import './App.css';

function App() {
  const element = useRoutes(RouteTable);
  return (
    <div className='app'>
      <Header />
      {element}
    </div>
  );
}

export default App;
