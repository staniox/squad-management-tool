import React from 'react';
import Menu from '../Menu/index'
import {BrowserRouter} from "react-router-dom";
import Routes from "../../routes";

const Index:React.FC = () => {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes/>
        </BrowserRouter>
    )
}

export default Index;