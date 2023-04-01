import {
  StyledButton,
  StyledContainer,
  StyledTitle,
  StyledBottomContainer,
  StyledButtonsContainer,
} from "./Expense.styled";

const Expense = (props) => {
  console.log(props);
  return (
    <StyledContainer category={props.expense.category}>
      <StyledTitle>თარიღი: {props.expense.date}</StyledTitle>
      <StyledTitle>category: {props.expense.category}</StyledTitle>
      <StyledBottomContainer>
        <StyledTitle>Income/expense</StyledTitle>
        <StyledButtonsContainer>
          <StyledButton>X</StyledButton>
          <StyledButton>Edit</StyledButton>
        </StyledButtonsContainer>
      </StyledBottomContainer>
    </StyledContainer>
  );
};

export default Expense;
