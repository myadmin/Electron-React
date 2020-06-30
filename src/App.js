import React from 'react';
import Slide from './components/Slide';
import Container from './components/Container';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 left">
          <Slide />
        </div>
        <div className="col-md-8">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default App;
