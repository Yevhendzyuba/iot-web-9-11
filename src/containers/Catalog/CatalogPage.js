import React, {useEffect, useState} from 'react';
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import {Container, CardWrapper} from "../../components/Global.styled";
import {MenuBar, DropBar} from "./CatalogPage.styled";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import {getFilteredName} from "../../api";


function CatalogPage() {

    const [items, setItems] = useState('');
    const [searchCosmetologyBuildName, setSearchCosmetologyBuildName] = useState('');

    const [filterCosmetologyBuildName, setFilterCosmetologyBuildName] = useState('None');
    useEffect(() => {
        if (filterCosmetologyBuildName !== "None")
            (async function () {
                setTotalCosmetologyBuilds(await getFilteredName(filterCosmetologyBuildName));
            })()
    }, [filterCosmetologyBuildName]);

    const [totalCosmetologyBuilds, setTotalCosmetologyBuilds] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/cosmetologyBuilds')
            .then(response => setTotalCosmetologyBuilds(response.data));

    }, []);

    useEffect(() => {
        const pattern = new RegExp(searchCosmetologyBuildName, 'i');
        let filteredItems = totalCosmetologyBuilds;

        if (searchCosmetologyBuildName !== '') {
            filteredItems = filteredItems.filter(item => (pattern.test(item.cosmetologyName)));
        }
        setItems(filteredItems.slice(0));
    }, [searchCosmetologyBuildName, totalCosmetologyBuilds]);
    if (items.length === 0) {
        return <Loader/>
    }

    return (
        <Container>
            <MenuBar>
                <Search searchState={[searchCosmetologyBuildName, setSearchCosmetologyBuildName]}/>
                <DropBar>
                    <Filter name='Name' options={['Mask', 'Powder','Lipstick','Scrub','Powder']}
                            filterState={[filterCosmetologyBuildName, setFilterCosmetologyBuildName]}/>
                </DropBar>
                <div>
                    <Button buttonText="Apply" backgroundColor="white" color="#000000" fontSize="15px"
                            padding="10px 55px"
                            border="1px solid #ffb6c1"/>
                </div>
            </MenuBar>
            <CardWrapper>
                {items.map((cosmetologyBuild) => (
                    <Card cosmetologyBuild={cosmetologyBuild}/>
                ))}
            </CardWrapper>
        </Container>
    );
}

export default CatalogPage;