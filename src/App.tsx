import { useStore, getName } from './store';
import { shallow } from 'zustand/shallow';
import './App.css';
import A from './components/A';
import B from './components/B';
import C from './components/C';

function App() {
  const store = useStore(getName, shallow);
  return (
    <div className='box'>
      {store.ancestor}
      <A></A>
      <B></B>
      <C></C>
    </div>
  );
}

export default App;
