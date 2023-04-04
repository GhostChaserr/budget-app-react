import {
  StyledTitle,
  StyledButton,
  StyledContainer,
  StyledSignInScreenWrapper,
} from "./Signin.styled";
import LabelInput from "../label-input/LabelInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
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
        <StyledButton
          onClick={() => {
            // 1. ვკითხულობთ ბაზას
            const users = JSON.parse(localStorage.getItem("users"));

            // 2. ჩაწერილი მეილით ვეძებთ მომხმარებელს
            const authenticatedUser = users.find(
              (user) => user.email === email
            );

            // 3. ვინახავთ ტოკენში მომხმარებლის აიდის
            localStorage.setItem("token", authenticatedUser.id);

            // 4. ვამისამართებთ მთავარ გვერდზე
            navigate("/");
          }}
        >
          Sign In
        </StyledButton>
      </StyledContainer>
    </StyledSignInScreenWrapper>
  );
};

export default SignIn;
