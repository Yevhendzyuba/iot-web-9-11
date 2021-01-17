import React from "react"
import {CardItem} from "./Card.styled";
import Button from "../Button/Button";
import {Link} from "react-router-dom";


function Card(props) {
    return (
        <CardItem>
            <img src={props.cosmetologyBuild.img} alt="Cosmetology"/>
            <h3>
                {props.cosmetologyBuild.cosmetologyName}
            </h3>
            <p>Appoinment For: {props.cosmetologyBuild.appointment_for}</p>
            <p>Produce Country:{props.cosmetologyBuild.produce_country}</p>
            <h5>Capacity In Ml :{props.cosmetologyBuild.capacity}</h5>
            <h5>Price In Uah: {props.cosmetologyBuild.priceInUah}</h5>
            <h5>Amount in Packer: {props.cosmetologyBuild.appointment_for}</h5>
            <Link exact to={`/catalog/item/${props.cosmetologyBuild.id}`}>
                <Button buttonText="View more" backgroundColor="#ffb6c1" color="#fff" fontSize="13px"
                        padding="10px 45px"
                        border="none"/>
            </Link>
        </CardItem>
    );
}

export default Card;
