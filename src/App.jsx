import { useState } from 'react';
import './App.css';
import Box from './components/Box/Box';

function App() {
  const [isVisible, setIsvible] = useState(false);
  
  return (
    <div className="App">
      <div>{isVisible && <Box />}</div>
      <button className='btn' onClick={() => setIsvible(!isVisible)}>Toogle visible</button>
    </div>
  );
}

export default App;
