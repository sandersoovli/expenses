import './ExpenseItem.css'
import '../App.jsx'
import  ExpenseDate  from './ExpenseDate.jsx'
import Card from './Card.jsx'

const ExpenseItem = (props) => {
const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
        title: enterTitle,
        amount: enterAmount,
        date: new Date(enteredDate)
    }
    props.onSaveExpensesData(expenseData)
    setEnterdTitle('')
    setEnterdAmount('')
    setEnterdDate('')
}
const ClickHandler = () =>{
    console.log('click');
}
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.data.date}/>
            <div className='expense-item_description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item_price'>{props.data.price}</div>
                <button onClick={ClickHandler}>Click me</button>
            </div>
        </Card>
    )
}

export default ExpenseItem