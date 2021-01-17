import React from "react";
import {Link, useHistory} from "react-router-dom";
import {Form, Formik} from "formik";
import {Title, Wrapper, ButtonWrapper, ErrorText} from "./Checkout.styled";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import * as Yup from "yup";

const Values = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phoneNumber: "",
};

const Schema = Yup.object({
    firstName: Yup.string()
        .required("This field is required")
        .min(3, "Should have at least 3 characters")
        .max(40, "Should not be longer than 40 characters"),
    lastName: Yup.string()
        .required("This field is required")
        .min(3, "Should have at least 3 characters")
        .max(40, "Should not be longer than 40 characters"),
    address: Yup.string()
        .required("This field is required")
        .min(10, "Should have at least 10 characters")
        .max(70, "Should not be longer than 70 characters"),
    email: Yup.string()
        .required("This field is required")
        .email("Email is not valid"),
    phoneNumber: Yup.string()
        .required("This field is required")
        .matches(/\+[0-9]{12}/, {
            message: "Phone number is not valid",
            excludeEmptyString: true,
        }),
});

function Checkout() {
    const history = useHistory();
    const handleSubmit = (values) => {
        history.push('/cart/checkout/success');
    };
    return (
        <div>
            <Title>Checkout</Title>
            <Formik
                Values={Values}
                validationSchema={Schema}
                onSubmit={handleSubmit}>
                <Form>
                    <Wrapper>
                        <Input type="text" name="firstName" placeholder="First Name"
                               render={error => <ErrorText>* {error}</ErrorText>}/>
                        <Input type="text" name="lastName" placeholder="Last Name"
                               render={error => <ErrorText>* {error}</ErrorText>}/>
                        <Input type="text" name="address" placeholder="Address"
                               render={error => <ErrorText>* {error}</ErrorText>}/>
                        <Input type="email" name="email" placeholder="Email"
                               render={error => <ErrorText>* {error}</ErrorText>}/>
                        <Input type="text" name="phoneNumber" placeholder="Phone Number"
                               render={error => <ErrorText>* {error}</ErrorText>}/>
                        <Button type="submit" buttonText="Submit" backgroundColor="#454545" color="#fff" fontSize="16px"
                                padding="13px 80px"
                                border="1px solid"/>
                    </Wrapper>
                    <ButtonWrapper>
                        <Link exact to="/catalog">
                            <Button buttonText="Back to Catalog" backgroundColor="#fff" color="#000000" fontSize="16px"
                                    padding="13px 20px"
                                    border="1px solid"/>
                        </Link>

                        <Button buttonText="Continue" backgroundColor="#454545" color="#fff" fontSize="16px"
                                padding="13px 25px"/>

                    </ButtonWrapper>
                </Form>
            </Formik>
        </div>
    );
}

export default Checkout;