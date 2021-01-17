import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Input} from 'semantic-ui-react';

export const LinkingWrapper = styled.ul`
    display:flex;
    list-style:none;
`;

export const NavInput = styled(Input)``;

export default styled(NavLink)`
    text-decoration:none;
`;

export const LinkItem = styled.li`
    padding:10px 40px;
    margin:0 15px;
    color:blue;
    text-decoration:none;
    font-size:16px;
    background:#ffb6c1;
    color:white;
    font-weight:400;
    border-radius:30px;
`;

export const Navbar = styled.nav`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-top:25px;
    padding-bottom:15px;
    border-bottom:1px solid pink;
`;

export const NavbarLogo = styled.img`
    width:200px;
    display:flex;
    height:70px;
    border:1px solid white;
    border-radius:10px;
    margin-right:10px;
    
`;



