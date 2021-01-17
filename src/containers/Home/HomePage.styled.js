import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:100px 0 250px 0;
`;
export const Logo = styled.img`
    width:470px;
    height:215px;
    margin-right:170px; 
    border:1px solid white;
    border-radius:20px;
`;

export const Text = styled.div`
    display:flex;
    flex-direction:column;
`;

export const Title = styled.h1`
       margin-bottom:0;
       font-size:50px;
`;

export const Description = styled.p`
    font-size:19px;
    font-weight:500;
`;

export const CardButtonWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin-top:150px;
`;
