import { FC } from 'react';



import ExpensesFeed from '../../components/expenses-feed/ExpensesFeed';
import Filters from '../../components/filters/Filters';
import Total from '../../components/total/Total';

const ExpensesScreen = () => {
  return (
    <div>
      <Filters/>
      <ExpensesFeed/>
      <Total/>
    </div>
  )
}

export default ExpensesScreen;