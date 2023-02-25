import './App.css';
import ASync1 from './components/Async1';
import Sync1 from './components/Sync1';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      <ASync1 />
      <Toaster />
    </div>
  );
}

export default App;
