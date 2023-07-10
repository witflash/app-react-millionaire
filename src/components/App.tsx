import React from 'react';
import { Loader } from 'components/Loader';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loader />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
