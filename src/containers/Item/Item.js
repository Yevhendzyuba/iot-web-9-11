import React, {useEffect,useState} from "react";
import {ItemWrapper, ItemData} from "./Item.styled"
import Button from "../../components/Button/Button";
import {Link,useParams} from "react-router-dom";
import axios from "axios";
import {Loader} from "semantic-ui-react";

function Item() {

    const {id} = useParams();
    const [cosmetologyBuild, setCosmetologyBuild] = useState();
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/cosmetologyBuilds/${id}`)
            .then(response => setCosmetologyBuild(response.data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!cosmetologyBuild){
        return <Loader/>
    }

    return (
        <ItemWrapper>
            <img src={cosmetologyBuild.img} alt="Sport"/>
            <ItemData>
                <h1>{cosmetologyBuild.cosmetologyName}</h1>
                <h3>Appoinment For: {cosmetologyBuild.appointment_for}</h3>
                <h3>Produce Country: {cosmetologyBuild.produce_country}</h3>
                <h3>Capacity: {cosmetologyBuild.capacity}</h3>
                <h3>Price In UAH: {cosmetologyBuild.priceInUah}</h3>
                <h3>Amount :{cosmetologyBuild.amountInPacket}</h3>
                <div>
                    <Link exact to="/catalog">
                        <Button buttonText="Go Back" backgroundColor="#fff" color="#000000" fontSize="15px"
                                padding="13px 20px"
                                border="1px solid"/>
                    </Link>
                    <Button buttonText="Add to cart" backgroundColor="#454545" color="#fff" fontSize="15px"
                            padding="13px 25px"/>
                </div>
            </ItemData>

        </ItemWrapper>
    );

}

export default Item;
