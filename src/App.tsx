import { useRoutes } from 'react-router-dom';
import Header from '@/components/Header';
import RouteTable from '@/pages/RouteTable';

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
