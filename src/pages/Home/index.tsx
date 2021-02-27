import React, {useEffect, useState} from 'react';
import ApiFootball from "../../services/ApiFootball";
import Panel from "../../components/Panel";
import RowC from "../../components/Row/index";
import Button from "./styles";
import { Link } from 'react-router-dom';

interface iPlayer{
    name: string
}

const Index: React.FC = () =>{
    const [players, setPlayers] = useState<iPlayer[]>([])
    function getPlayers(){
        ApiFootball.get('/v2/players/team/443').then((res) =>{
            console.log(res.data)
            setPlayers(res.data)
        })
    }

    useEffect(getPlayers,[])

    return (
        <RowC>
            <Panel title='My teams' header={<Button to='/teams/add'>+</Button>} content='teste content'/>
            <Panel title='Top 5' content='teste content'/>
        </RowC>
    );
}

export default Index;