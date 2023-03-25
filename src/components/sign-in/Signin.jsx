import {
  StyledTitle,
  StyledButton,
  StyledContainer,
  StyledSignInScreenWrapper,
} from "./Signin.styled";
import LabelInput from "../label-input/LabelInput";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  return (
    <StyledSignInScreenWrapper>
      <StyledContainer>
        <StyledTitle> Sign In </StyledTitle>
        <LabelInput
          id={1}
          text="Enter your email"
          type={"email"}
          name={"email-field"}
          value={email}
          onChange={onEmailChange}
        />
        <LabelInput
          id={2}
          text="Enter your password"
          type={"password"}
          name={"password-field"}
          value={password}
          onChange={onPasswordChange}
        />
        <StyledButton>Sign In</StyledButton>
      </StyledContainer>
    </StyledSignInScreenWrapper>
  );
};

export default SignIn;
