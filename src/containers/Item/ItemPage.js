import React, {useEffect, useState} from "react";
import {Wrapper, Data} from "./ItemPage.styled"
import Button from "../../components/Button/Button";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {addCart} from "../../utils/store/slice/CosmetologySlice";
import {Loader} from "semantic-ui-react";
import {useDispatch} from "react-redux";


function ItemPage() {
    const dispatch = useDispatch;

    const {id} = useParams();
    const [cosmetologyBuild, setCosmetologyBuild] = useState();
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/cosmetologyBuilds/${id}`)
            .then(response => setCosmetologyBuild(response.data));
    }, []);
    if (!cosmetologyBuild) {
        return <Loader/>
    }

    return (
        <Wrapper>
            <img src={cosmetologyBuild.img} alt="Sport"/>
            <Data>
                <h1>{cosmetologyBuild.cosmetologyName}</h1>
                <h3>Appoinment For: {cosmetologyBuild.appointment_for}</h3>
                <h3>Produce Country: {cosmetologyBuild.produce_country}</h3>
                <h3>Capacity: {cosmetologyBuild.capacity}</h3>
                <h3>Price In UAH: {cosmetologyBuild.priceInUah}</h3>
                <h3>Amount :{cosmetologyBuild.amountInPacket}</h3>
                <div>
                    <Link exact to="/catalog">
                        <Button buttonText="Go Back" backgroundColor="#fff" color="#000000" fontSize="15px"
                                padding="15px 25px"
                                border="1px solid "/>
                    </Link>
                    <Button buttonText="Add to cart" backgroundColor="#454545" color="#fff" fontSize="15px"
                            padding="13px 25px"/> onClick={() => dispatch(addCart(cosmetologyBuild))}/>
                </div>
            </Data>

        </Wrapper>
    );

}

export default ItemPage;
