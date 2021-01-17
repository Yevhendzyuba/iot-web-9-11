import React from 'react';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import {cosmetologyBuild} from "../../components/data";
import Cosmetology from "../../components/Cosmetology";

function App() {
    return (
        <div>
            <Cosmetology.Provider value={cosmetologyBuild}>
                <Header/>
                <Footer/>
            </Cosmetology.Provider>
        </div>
    );
}

export default App;
