import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount('e.target.value');
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={handleTitle} />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={handleAmount} />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2020-01-01'
            max='2022-12-31'
            onChange={handleDate}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
