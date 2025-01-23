
import ExpenseItem from './components/ExpenseItem';
import './App.css';
const App = () => {
  const data = [ {
    date: new Date(2024, 10, 12),
    title: 'New book',
    price: 30.99
  }, 
  {
    date: new Date(2024, 10, 12),
    title: 'New jeans',
    price: 99.99
  } 
]
  
  
  return (
    <div className="expense-item">
      <ExpenseItem data={data[0]}/>
      <ExpenseItem data={data[1]}/>
    </div>
  );
}

export default App
