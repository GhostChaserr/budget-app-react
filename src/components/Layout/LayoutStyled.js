import styled from "styled-components";

export const StyeldBgWrapper = styled.div`
  background-color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;
