import React from 'react';
import './App.css';
//Import Global Provider
import {GLobalProvider} from './context/GlobalState';

//Import Components
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TransactionHistory } from './components/TransactionHistory'
import { AddTransaction } from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className="container"><Balance></Balance></div>
      <div className="container"><AccountSummary></AccountSummary></div>
      <div className="container"><TransactionHistory></TransactionHistory></div>
      <div className="container"><AddTransaction></AddTransaction></div>
      
    </GlobalProvider>
  );
}

export default App;
