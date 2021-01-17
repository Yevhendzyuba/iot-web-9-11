import React, {useEffect,useState} from 'react';
import Cart from "../../components/CartI/Cart"
import {Title} from "./CartPage.styled"
import Loader from "../../components/Loader/Loader";
import {useSelector} from "react-redux";
import {selectCart} from "../../utils/store/slice/CosmetologySlice";

function CartPage() {
    const cart = useSelector(selectCart);

    const [load, setLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoad(false), 2000)
    }, []);
    if (load === true) {
        return <Loader/>
    }
    return (
        <div>
            <Title>Cosmetology Builds Cart</Title>
            {cart.map((item) => (
                <Cart item={item}/>

            ))}
        </div>
    );

}


export default CartPage;