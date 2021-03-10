import React from 'react';
import {Container} from '../styles'
import {IInput} from "../../../interfaces";

const Textarea = (props:IInput) => {
    return (
        <Container>
            <label className={"input-label"} htmlFor={props.id}>{props.label}</label>
            <textarea name={props.id} className="inputs-items" />
        </Container>
    );
};

export default Textarea;