import "./filters.css";

import { StyledDatePicker } from "./Filters.styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { InputNumber, Select, Button } from "antd";
import { useContext } from "react";
import { ExpensesFeedContext } from "../expenses-feed/ExpensesFeedContext";

const Filters = () => {
  const { filters, setFilters } = useContext(ExpensesFeedContext);
  console.log("Filters", filters);
  const [selectedDate, setSelectedDate] = useState("");
  const [minAmount, setMinAmount] = useState(undefined);
  const [maxAmount, setMaxAmount] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState();
  const onSelectedDate = (date, dateString) => setSelectedDate(dateString);
  const onMinAmountChange = (e) => setMinAmount(e.target.value);
  const onMaxAmountChange = (e) => setMaxAmount(e.target.value);
  const onCategoryChange = (e) => setSelectedCategory(e.target.value);

  const onFiltersSubmit = () => {
    setFilters({ ...filters, selectedCategory, minAmount, maxAmount });
  };

  console.log(selectedDate);

  const options = [
    {
      id: 1,
      label: "Shopping",
      value: "shopping",
    },
    {
      id: 2,
      label: "Invoice",
      value: "invoice",
    },
  ];

  return (
    <div className="filters__container">
      <StyledDatePicker onChange={onSelectedDate} />
      <div>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={(e) => setSelectedCategory(e)}
          options={options}
          value={selectedCategory}
        />
        {/* <Select
          value={selectedCategory}
          text="Select Category"
          options={options}
          onChange={onCategoryChange}
        /> */}
      </div>
      <div className="amount__filters_container">
        <InputNumber value={minAmount} onChange={onMinAmountChange} />
        <InputNumber value={maxAmount} onChange={onMinAmountChange} />
      </div>
      <div className="apply__button__container">
        <Button size="large" onClick={onFiltersSubmit}>
          Filter
        </Button>
        <Link to={"/add-expense"}>Add Expense</Link>
        <Link to={"/signin"}>SignIn</Link>
        <Link to={"/signup"}>Signup</Link>
      </div>
    </div>
  );
};

export default Filters;
