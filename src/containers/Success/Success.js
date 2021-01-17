import React from "react";
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import {Wrapper, Title, Description,Logo} from "./Success.styled";
import suc_logo from "../../icons/suc_logo.png";


function Success() {
    return (
        <Wrapper>
            <Logo src={suc_logo} alt="Success"/>
            <Title>Success!</Title>
            <Description>Your order was sent to processing!<br/>Check your email box for further
                information.</Description>
            <Link exact to="/catalog">
                <Button buttonText="Go back to Catalog" backgroundColor="#454545" color="#fff" fontSize="16px"
                        padding="13px 25px"/>
            </Link>
        </Wrapper>);
}

export default Success;