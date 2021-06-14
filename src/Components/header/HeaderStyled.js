import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #819ff5;
  background-color: #424242;

  .headerIcon {
    width: 40px;
    height: 40px;
    fill: #819ff5;
    &:hover {
      fill: #5f73a1;
      cursor: pointer;
    }
  }
  .wrapper {
    width: 80vw;
    height: calc(100vh - 60px);
    background-color: rgb(53, 60, 75);
    margin-top: 60px;
  }
`;
