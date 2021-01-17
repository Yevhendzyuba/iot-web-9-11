import React from "react";
import {useDispatch} from "react-redux";
import {incrementCart, decrementCart} from "../../utils/store/slice/CosmetologySlice";
import {Wrapper,Logo} from "./Cart.styled";
import Button from "../../components/Button/Button";


function CartItem(props) {
    const dispatch = useDispatch();

    return (

        <Wrapper>
            <div>
                <Logo src={props.cosmetologyBuild.img}  alt="CartLogo"/>
                <h1>{props.item.cosmetologyName}</h1>
            </div>
            <div>
                <Button buttonText="-" backgroundColor="#454545" color="#fff" fontSize="16px"
                        padding="7px 10px" height="45px" onClick={() => dispatch(decrementCart(props.item))}/>
                <h2>Price in UAH: {props.item.price_in_uah}</h2>
                <Button buttonText="+" backgroundColor="#454545" color="#fff" fontSize="16px"
                        padding="7px 10px" height="45px" onClick={() => dispatch(incrementCart(props.item))}/>
            </div>
        </Wrapper>


    );
}

export default CartItem;