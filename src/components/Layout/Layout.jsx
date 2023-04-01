import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: red;
`;

const Layout = (props) => {
  return (
    <>
      <header>Header</header>
      <div>{props.children}</div>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
