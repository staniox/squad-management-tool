import React from 'react';
import Panel from "../../components/Panel";
import RowC from "../../components/Row/index";
import Button from "./styles";
import { Link } from 'react-router-dom';

const Index: React.FC = () =>{
    return (
        <RowC>
            <Panel title='My teams' header={<Button to='/teams/add'>+</Button>} content='teste content'/>
            <Panel title='Top 5' content='teste content'/>
        </RowC>
    );
}

export default Index;