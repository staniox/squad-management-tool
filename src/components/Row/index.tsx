import React from 'react';
import Container from './styles'

const Row = (props:any) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
};

export default Row;
