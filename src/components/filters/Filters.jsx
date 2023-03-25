import "./filters.css";

import { StyledDatePicker } from "./Filters.styled";
import { useState } from "react";
import { InputNumber, Select, Button } from "antd";

const Filters = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [minAmount, setMinAmount] = useState(undefined);
  const [maxAmount, setMaxAmount] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState();
  const onSelectedDate = (date, dateString) => setSelectedDate(dateString);
  const onMinAmountChange = (e) => setMinAmount(e.target.value);
  const onMaxAmountChange = (e) => setMaxAmount(e.target.value);
  const onCategoryChange = (e) => setSelectedCategory(e.target.value);

  const onFiltersSubmit = () => {
    const minAmountInt = parseFloat(minAmount);
    const maxAmountInt = parseFloat(maxAmount);

    console.log({ minAmountInt, maxAmountInt, selectedCategory, selectedDate });

    // console.log({
    //   selectedDate,
    //   parseFloat(minAmount),
    //   maxAmount,
    //   selectedCategory
    // })
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
          onChange={onCategoryChange}
          options={options}
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
      </div>
    </div>
  );
};

export default Filters;
