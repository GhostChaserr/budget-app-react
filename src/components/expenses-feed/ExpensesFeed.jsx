import { useState } from "react";
import Expense from "../expense/Expense";
import Filters from "../filters/Filters";
import { ExpensesFeedContext } from "./ExpensesFeedContext";
import { useContext } from "react";

const getExpenses = () => {
  return [
    {
      id: 1,
      category: "shopping",
    },
    {
      id: 2,
      category: "invoice",
    },
  ];
};

const ExpensesList = () => {
  const { filters, setFilters } = useContext(ExpensesFeedContext);
  console.log("Filters", filters);
  const { selectedCategory } = filters;
  console.log("Selected Category", selectedCategory);

  // 1. Read expenses
  const expenses = getExpenses();

  // 2. Filter by selected filters
  const filtered =
    selectedCategory !== ""
      ? expenses.filter((expense) => expense.category === selectedCategory)
      : expenses;

  return (
    <>
      {filtered.map((expense) => (
        <Expense expense={expense} key={expense.id} />
      ))}
    </>
  );
};

const ExpensesFeed = () => {
  const [filters, setFilters] = useState({ selectedCategory: "" });
  return (
    <ExpensesFeedContext.Provider value={{ filters, setFilters }}>
      <Filters />
      <ExpensesList />
    </ExpensesFeedContext.Provider>
  );
};

export default ExpensesFeed;
