import React from 'react';
import './Style/App.css';
import ExpenseProvder from './ContextApi/ExpenseContext';
import Total from './Components/Total';
import Expenses from './Components/Expenses';
import Transiction from './Components/Transiction';
import History from './Components/History'
import Loader from './Components/Loader';

function App() {
  return (
    <div className="App">
      <ExpenseProvder>
        <Loader />
        <Total/>
        <Expenses />
        <History />
        <Transiction />
      </ExpenseProvder>
    </div>
  );
}

export default App;
