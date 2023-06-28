import './App.css';
import { Downloads } from './components/Downloads';
import { Settings } from './components/Settings';

function App() {
  return (
    <div className='w-full'>
      <header>
        <p className='text-xl'>
            Downloads Manager
        </p>
      </header>
      <hr />
      <div className="flex">
        <div className='basis-5/6'>
        <Downloads />
        </div>
        <div className='basis-1/6'>
        <Settings />
        </div>
      </div>
    </div>
  );
}

export default App;
