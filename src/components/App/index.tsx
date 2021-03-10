import React from 'react';
import Menu from '../Menu/index'
import {BrowserRouter} from "react-router-dom";
import Routes from "../../routes";
import Container from "./styles";
import Footer from "../Footer";
import DataProvider ,{DataContext} from "../../providers/DataContext";

const Index:React.FC = () => {
    return (
        <DataProvider>
            <BrowserRouter>
                <Container>
                    <Menu/>
                    <Routes/>
                    <Footer/>
                </Container>
            </BrowserRouter>
        </DataProvider>
    )
}

export default Index;