import './ExpenseItem.css'
import '../App.jsx'
import  ExpenseDate  from './ExpenseDate.jsx'
import Card from './Card.jsx'

const ExpenseItem = (props) => {


    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.data.date}/>
            <div className='expense-item_description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item_price'>{props.data.price}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem