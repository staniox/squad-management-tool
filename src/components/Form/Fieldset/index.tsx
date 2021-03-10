import React from 'react';
import {Container} from "./styles";
import {IFieldset} from "../../../interfaces";

const Fieldset = (props:IFieldset) => {
    return (
        <Container className="flex-start">
            <legend>{props.legend.toUpperCase()}</legend>
            <div className="flex-start content">{props.content1}</div>
            <div className="flex-start content">{props.content2}</div>
        </Container>
    );
};

export default Fieldset;