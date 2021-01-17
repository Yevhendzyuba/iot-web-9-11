import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  padding-top: 25px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-child(5) {
    margin-bottom: 35px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding: 0 200px 0 200px;

`;

export const ErrorText = styled.span`
  color: red;


`;