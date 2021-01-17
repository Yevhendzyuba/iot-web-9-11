import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid black;
  margin: 20px 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;

  div {
    &:nth-child(1) {
      margin: 0;

      h1 {
        padding: 0 5px 15px 50px;
      }
    }

    display: flex;
    align-items: center;

    h2 {
      padding: 0 5px 10px 5px;
    }
  }

`;

export const Logo = styled.img`
  width: 170px;
  margin: 0;
`;

