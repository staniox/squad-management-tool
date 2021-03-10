import React from 'react';
import Card from './styles'
import {IPanel} from "../../interfaces";

function Index(props:IPanel) {
    return (
        <Card>
            <header><h2>{props.title}</h2>{props.header}</header>
            <hr/>
            <div id="panel-content">{props.content}</div>
        </Card>
    );
}

export default Index;