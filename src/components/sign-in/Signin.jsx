import {
  StyledTitle,
  StyledButton,
  StyledContainer,
  StyledSignInScreenWrapper,
} from "./Signin.styled";
import LabelInput from "../label-input/LabelInput";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../LanguageContext";
import TEXTS from "../../langs";
import useSignIn from "./useSignIn";

console.log("ruNNING.");

const SignIn = () => {
  // ბიზნეს ლოგიკა
  const {
    language,
    email,
    onEmailChange,
    onPasswordChange,
    password,
    navigate,
  } = useSignIn();

  // ინტერფესიი
  return (
    <StyledSignInScreenWrapper>
      <StyledContainer>
        <StyledTitle>{TEXTS[language].signInHeader}</StyledTitle>
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
