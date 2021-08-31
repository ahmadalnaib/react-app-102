import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return (
    <div>
      <div>
      <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
      </div>
    </div>
  )
}

export default Expenses
