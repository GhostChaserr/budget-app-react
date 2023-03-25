import styled from "styled-components";


export const StyledContainer = styled.div`
  width: 300px;
  height: auto;
  display:flex;
  flex-direction: column;

`;

export const StyledTitle = styled.p`
  margin: 5px 0;
  font-size: 16px;
`

export const StyledBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledButtonsContainer = styled(StyledBottomContainer)`
  gap: 10px;
`

export const StyledButton = styled.button`
  
`