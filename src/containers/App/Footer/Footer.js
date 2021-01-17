import React from 'react';
import {
    Wrapper,
    Title,
    FooterLogo,
    Description,
    HorizontalLine,
    Copyright
} from './Footer.styled';
import Logo from '../../../icons/homepage_logo.jpg';
import {FaFacebook, FaTwitter, FaLinkedin, FaGoogle} from 'react-icons/fa';
import {Container} from '../../../components/Global.styled';


function Footer() {
    return (
        <Container>
            <Wrapper>
                <div>
                    <Title>
                        Cosmetology Build
                    </Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Dicta laboriosam
                        nihil
                        quasi repudiandae<br/> totam velit veritatis?</Description>
                </div>
                <FooterLogo src={Logo} alt="logo"/>
                <div>
                    <FaFacebook style={{paddingLeft: "20px",}} size={44}/>
                    <FaTwitter style={{paddingLeft: "20px",}} size={44}/>
                    <FaLinkedin style={{paddingLeft: "20px",}} size={44}/>
                    <FaGoogle style={{paddingLeft: "20px",}} size={44}/>
                </div>
            </Wrapper>
            <HorizontalLine/>
            <Copyright> All rights reserved © Dzyuba Yevhen IOT 2020 </Copyright>
        </Container>
    );
}
export default Footer;