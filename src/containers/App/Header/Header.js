import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";import {Container} from '../../../components/Global.styled';
import {LinkingWrapper, LinkItem, Navbar, NavbarLogo} from "./Header.styled";
import 'semantic-ui-css/semantic.min.css';
import NavLink from "./Header.styled";
import HomePage from "../../Home/HomePage";
import CatalogPage from "../../Catalog/CatalogPage";
import CartPage from "../../Cart/CartPage";
import Logo from '../../../icons/homepage_logo.jpg';
import ItemPage from "../../Item/ItemPage";

function Header() {
    return (
        <Container>
            <Router>
                <Navbar>
                    <NavbarLogo src={Logo} alt="Logo"/>
                    <LinkingWrapper>
                        <li>
                            <NavLink exact to="/">
                                <LinkItem>Home</LinkItem></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/catalog">
                                <LinkItem>Catalog</LinkItem></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/cart">
                                <LinkItem>Cart</LinkItem></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/catalog/item">
                            </NavLink>
                        </li>
                    </LinkingWrapper>
                </Navbar>
                <Switch>
                    <Route path="/catalog/item/:id">
                        <ItemPage/>
                    </Route>
                    <Route path="/cart">
                        <CartPage/>
                    </Route>
                    <Route path="/catalog">
                        <CatalogPage/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </Router>
        </Container>
    );
}

export default Header;