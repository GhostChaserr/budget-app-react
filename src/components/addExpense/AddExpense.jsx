import {
  DatePicker,
  Space,
  Typography,
  Checkbox,
  InputNumber,
  Button,
} from "antd";
import { useState } from "react";

const AddExpense = () => {
  const [, setSelectedDate] = useState();
  const [isExpense, setIsExpense] = useState();
  const [amount, setAmount] = useState();

  return (
    <Space direction="vertical">
      <Space direction="vertical">
        <Typography>Select date:</Typography>
        <DatePicker
          onChange={(date, dateString) => setSelectedDate(dateString)}
        />
      </Space>
      <Space direction="vertical">
        <Typography>Expense/Income</Typography>
        <Checkbox
          value={isExpense}
          onChange={(e) => setIsExpense(e.target.checked)}
        >
          {isExpense && "Expense"}
          {!isExpense && "Income"}
        </Checkbox>
      </Space>
      <Space>
        <Typography>Amount:</Typography>
        <InputNumber
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Space>
      <Space>
        <Button size="large">Add Expense</Button>
      </Space>
    </Space>
  );
};

export default AddExpense;
