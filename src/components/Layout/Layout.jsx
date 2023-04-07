import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../ThemeContext";

import { StyeldBgWrapper } from "./LayoutStyled";
export const StyledContainer = styled.div`
  background-color: red;
`;

const Layout = (props) => {
  const themeContext = useContext(ThemeContext);
  console.log("Theme", themeContext.theme);
  return (
    <StyeldBgWrapper theme={themeContext.theme}>
      <header>Header</header>
      <div>{props.children}</div>
      <footer>Footer</footer>
    </StyeldBgWrapper>
  );
};

export default Layout;
