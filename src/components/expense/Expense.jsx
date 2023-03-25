import {
  StyledButton,
  StyledContainer,
  StyledTitle,
  StyledBottomContainer,
  StyledButtonsContainer,
} from "./Expense.styled";

const Expense = (props) => {
  return (
    <StyledContainer category={props.category}>
      <StyledTitle>თარიღი: {props.date}</StyledTitle>
      <StyledTitle>category: {props.category}</StyledTitle>
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
