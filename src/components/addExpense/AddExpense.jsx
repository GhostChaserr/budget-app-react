import {
  DatePicker,
  Space,
  Typography,
  Checkbox,
  InputNumber,
  Button,
} from "antd";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const AddExpense = () => {
  const params = useParams();

  const [, setSelectedDate] = useState();
  const [isExpense, setIsExpense] = useState();
  const [amount, setAmount] = useState();

  return (
    <Space direction="vertical">
      <Space direction="vertical">
        {params.id && <p>Editing Expense: {params.id}</p>}
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
      <Link to={"/"}>Back to Home</Link>
    </Space>
  );
};

export default AddExpense;
