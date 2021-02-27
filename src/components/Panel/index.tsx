import React from 'react';
import Card from './styles'

interface IPanel{
    header?:any,
    title:string,
    content:any,
    color?:string
}

function Index(props:IPanel) {
    return (
        <Card>
            <header><h2>{props.title}</h2>{props.header}</header>
            <hr/>
            <div>{props.content}</div>
        </Card>
    );
}

export default Index;