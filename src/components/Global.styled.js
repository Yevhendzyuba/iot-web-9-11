import styled from 'styled-components';

export const Container = styled.div`
  margin:0 40px,
`

export const CardWrapper = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap: wrap;
    margin: 50px 0 150px 20px;

`;
export const CatalogSelect = styled.select`
  padding: 10px 45px;
  font-size: 15px;

  &:nth-child(1) {
    margin-left: 15px;
  }
  
  &:nth-child(2) {
    margin-left: 15px;
  }

  &:nth-child(3) {
    margin-left: 15px;
  }
`;
