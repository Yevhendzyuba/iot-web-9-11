import React, {useEffect,useContext, useState} from "react";
import {Container, CardWrapper} from "../../components/Global.styled";
import {
    Wrapper,
    Logo,
    Text,
    TextTitle,
    TextDescription,
    CardButtonWrapper
} from "./Home.styled";
import axios from "axios";
import CosmetologyIcon from "../../icons/homepage_logo.jpg";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Cosmetology from "../../components/Cosmetology";


function Home() {

    const cosmetologyBuilds = useContext(Cosmetology)

    const [totalCosmetologyBuilds, setTotalCosmetologyBuilds] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/cosmetologyBuilds')
            .then(response => setTotalCosmetologyBuilds(response.data));

    }, []);


    const [showMore, setShowMoreState] = useState({showMoreItems: false})

    function handleSetShowMoreState() {
        setShowMoreState({showMoreItems: true})
    }

    const itemsToShow = showMore.showMoreItems ? totalCosmetologyBuilds.length : 5

    return (
        <Container>
            <Wrapper>
                <Logo src={CosmetologyIcon} alt="CosmetologyLogoIntro"/>
                <Text>
                    <TextTitle>Ella Bella Cosmetology</TextTitle>
                    <TextDescription>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.<br/> Dignissimos
                        et expedita iure minus
                        temporibus. Asperiores blanditiis<br/> corporis dolore earum fugit laudantium nam perspiciatis,
                        reiciendis<br/> repellendus unde. Atque delectus exercitationem
                        ratione.</TextDescription>
                </Text>
            </Wrapper>
            <CardWrapper>
                {cosmetologyBuilds.slice(0, itemsToShow).map((cosmetologyBuild) => {
                    return (
                        <Card cosmetologyBuild={cosmetologyBuild}/>
                    )
                })}
            </CardWrapper>
            <CardButtonWrapper>
                <Button buttonText="View more" backgroundColor="#ffb6c1" color="#fff" fontSize="16" padding="20px 50px"
                        onClick={() => handleSetShowMoreState()}/>
            </CardButtonWrapper>
        </Container>

    );
}


export default Home;