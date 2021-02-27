import React from 'react';
import Container from "./styles";
import Row from "../../../components/Row/index"
import Card from "../../../components/Panel/index"
import TeamFormation from "../../../components/TeamFormation";

const TeamsAdd = () => {
    return (
        <Container>
            <Row>
                <Card title="Create your team" content={<TeamFormation/>}/>
            </Row>
        </Container>
    );
};

export default TeamsAdd;
