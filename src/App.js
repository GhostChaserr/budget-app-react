

// Load screens
import Filters from './components/filters/Filters';
import Expense from './components/expense/Expense';

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
      <Expense category="expense"/>
      {/* <Notification text="hello2"  /> */}
      {/* <Filters/> */}
    </div>
  );
}

export default App;
