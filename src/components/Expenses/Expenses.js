import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

function Expenses(props) {
  const [filteredYear,setfilterYear]=useState('2020');
  const filterChangeHandler=selectedYear =>{
    setfilterYear(selectedYear)
  }
  return (
    <div>
  
    <Card>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <div className="expenses">
        {
          props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)
        }
      </div>
    </Card>
    </div>
  )
}

export default Expenses
