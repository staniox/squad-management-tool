import React, {useContext} from 'react';
import {Container, Select} from "./styles";
import Circle from "../Circle";
import Row from "../Row";
import {DataContext} from "../../providers/DataContext";
import Input from "../Inputs"
import SearchPlayers from "../Search";
import Fieldset from "../Form/Fieldset";


const TeamFormation =  () => {
        const  {squadFormation,setSF} = useContext(DataContext)
        const defaultValue:any = "3-2-2-3"
        setSF(squadFormation || defaultValue)
        function handleChange (event:any) {
            setSF( event.target.value || event.target.defaultValue)
        }
    return (
            <Fieldset legend="Configure Squad" content1={
                [
                    <Select>
                        <label>Formation</label><br/>
                        <select value={squadFormation} defaultValue={defaultValue} onChange={handleChange} onLoad={handleChange}>
                            <option value="3-2-2-3">3-2-2-3</option>
                            <option value="3-2-3-1">3-2-3-1</option>
                            <option value="3-4-3">3-4-3</option>
                            <option value="3-5-2">3-5-2</option>
                            <option value="4-2-3-1">4-2-3-1</option>
                            <option value="4-3-1-1">4-3-1-1</option>
                            <option value="4-3-2">4-3-2</option>
                            <option value="4-4-2">4-4-2</option>
                            <option value="4-5-1">4-5-1</option>
                            <option value="5-4-1">5-4-1</option>
                        </select>
                    </Select>,

                        <Container>
                            <hr id="mid-line" className="soccerLines"/>
                            <div id="circle" className="soccerLines"/>


                            {["1"].concat(squadFormation.split("-")).reverse().map((el, i) =>{

                                    const array = [];
                                    for (let j=0; j<parseInt(el); j++){
                                        const circles =   <Circle class={"circle-"+(j+1)+el}  key={el+i+j} />
                                        array.push(circles)

                                    }
                                    return array;
                                }
                            )}

                        </Container>]
            } content2={
                <SearchPlayers  />
            } />


    );
};

export default TeamFormation;
