

// Load screens
import Filters from './components/filters/Filters';
import AddExpense from './components/addExpense/AddExpense'


const Notification = (props) => {
  const { text } = props;
  return (
    <div>
      {text}
    </div>
  )
}

Notification.defaultProps = {
  text: "hello"
}

function App() {
  return (
    <div>
      <AddExpense/>
      {/* <SignIn/> */}
      {/* <Signup/> */}
      {/* <Filters/> */}
      {/* <Expense/> */}
      {/* <Signup/> */}
      {/* <Expense category="expense"/> */}
      {/* <Notification text="hello2"  /> */}
      {/* <Filters/> */}
    </div>
  );
}

export default App;
