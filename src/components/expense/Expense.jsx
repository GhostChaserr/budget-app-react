import {
  StyledButton,
  StyledContainer,
  StyledTitle,
  StyledBottomContainer,
  StyledButtonsContainer,
} from "./Expense.styled";

const readCurrentUser = () => {
  const userId = localStorage.getItem("token");
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find((user) => user.id === userId);
  return user;
};

const Expense = (props) => {
  // const user = readCurrentUser();
  return (
    <StyledContainer category={props.expense.category}>
      <StyledTitle>თარიღი: {props.expense.date}</StyledTitle>
      <StyledTitle>category: {props.expense.category}</StyledTitle>
      <StyledBottomContainer>
        <StyledTitle>Income/expense</StyledTitle>
        <StyledButtonsContainer>
          {"admin" &
          (
            <>
              <StyledButton>X</StyledButton>
              <StyledButton>Edit</StyledButton>
            </>
          )}
        </StyledButtonsContainer>
      </StyledBottomContainer>
    </StyledContainer>
  );
};

export default Expense;
