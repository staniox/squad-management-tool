import React from 'react';
import Row from "../../../components/Row/index"
import Card from "../../../components/Panel/index"
import TeamFormation from "../../../components/TeamFormation";
import { ITagInputArray} from "../../../interfaces";
import Fieldset from "../../../components/Form/Fieldset";
import Input from "../../../components/Inputs";
import Textarea from "../../../components/Inputs/Textarea";
import TagInput from "../../../components/Inputs/TagInput";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend'

const TeamsAdd = () => {
    const radioInput:ITagInputArray=
        {items:[
                {label:"Real", value:"real"},
                {label:"Fantasy", value:"fantasy"},
            ]}


    return (
        <DndProvider backend={HTML5Backend}>
            <Row>

                <Card title="Create your team" content={
                    <form>
                        <Fieldset legend="Team Information" content1={
                            [   <Input id="team-name" label="Team name" type="text" placeholder="Insert team name" />,
                                <Textarea type="textarea" id="team-description" label="Description"/>]
                        } content2={
                            [   <Input id="team-type" label="Team type" type="radio" placeholder="type" radio={radioInput} />,
                                <Input id="team-website" label="Tags" type="text" placeholder="tags" />,
                                <TagInput />
                            ]
                        } />
                        <TeamFormation/>
                    </form>
                }/>
            </Row>
        </DndProvider>
    );
};

export default TeamsAdd;
