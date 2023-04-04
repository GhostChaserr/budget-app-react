import {
  StyledContainer,
  StyledButton,
  StyledSignupScreenWrapper,
  StyledTitle,
} from "./Signup.styled";
import LabelInput from "../label-input/LabelInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const onRepeatPasswordChange = (e) => setRepeatPassword(e.target.value);
  return (
    <StyledSignupScreenWrapper>
      <StyledContainer>
        <StyledTitle> Signup </StyledTitle>
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
        <LabelInput
          id={3}
          text="Enter your password"
          type={"password"}
          name={"password-field"}
          value={repeatPassword}
          onChange={onRepeatPasswordChange}
        />
        <StyledButton
          onClick={() => {
            // 1. add user to suers
            const user = {
              id: 1,
              email,
              password: password,
              role: "user",
            };

            // Save user
            localStorage.setItem("users", JSON.stringify([user]));

            // Save Auth TOken
            localStorage.setItem("token", user.id);

            navigate("/");
          }}
        >
          Submit
        </StyledButton>
      </StyledContainer>
    </StyledSignupScreenWrapper>
  );
};

export default Signup;
