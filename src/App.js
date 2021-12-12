import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <div className="App-main container d-flex">
        <div className='cartItems d-flex p-3'>
          <h1>Shopping Cart</h1>
        </div>
        <div className='cartTotal d-flex p-3'>
          
        </div>
      </div>

    </div>
  );
}

export default App;
