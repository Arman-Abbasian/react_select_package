import './App.css';
import ASync1 from './components/Async1';
import Sync1 from './components/Sync1';
import { Toaster } from 'react-hot-toast';
import { PizzaCard } from './components/Sync2';


function App() {
  return (
    <div>
      <PizzaCard />
      <Toaster />
    </div>
  );
}

export default App;
