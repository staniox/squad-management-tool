import React from 'react';
import {Container} from "./styles";
import {ITemplateField} from "../../interfaces";

const TemplateField = (props:ITemplateField) => {
    return (
        <Container>
           <label >{props.title}</label>
            {props.content}
        </Container>
    );
};

export default TemplateField;