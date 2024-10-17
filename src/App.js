import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          </div>
      </div>
    </Router>
  );
}

export default App;