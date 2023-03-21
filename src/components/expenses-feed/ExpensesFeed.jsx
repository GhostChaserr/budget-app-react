
import Expense from "../expense/Expense";


const ExpensesFeed = () => {
  const items = [1, 2 ,3]
  return (
    <div>
      {items.map(expense => <Expense key={expense} />)}
    </div>
  )
}

export default ExpensesFeed;