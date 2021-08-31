import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

function Expenses(props) {
  return (
    <Card>
      <div className="expenses">
      <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
      </div>
    </Card>
  )
}

export default Expenses
