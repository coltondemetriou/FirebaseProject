import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContractForm from './ContractForm.js';
import Flexbox from 'flexbox-react';

function App() {
  return (
    <div>
      <Flexbox justifyContent='center'>
      <h1 >Contract Database</h1>
      </Flexbox>
      <ContractForm />
    </div>
  );
}

export default App;
