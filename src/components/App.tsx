import React from 'react';
import Dots from './Dots';
import './App.css';

export default function App() {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className="container-fluid">
      <h1>Ex Oblivione</h1>
      <Dots level={3} max={4} onClick={handleClick} />
    </div>
  );
}
