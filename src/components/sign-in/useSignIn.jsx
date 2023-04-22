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

const useSignIn = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  return {
    language,
    navigate,
    email,
    password,
    onEmailChange,
    onPasswordChange,
  };
};

export default useSignIn;
