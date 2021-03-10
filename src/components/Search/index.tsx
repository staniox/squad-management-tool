import React, {useState} from 'react';
import ApiFootball from "../../services/ApiFootball";
import Container from "./styles";
import Input from "../Inputs";
import {IPlayer, IApiPlayers} from "../../interfaces";
import ItemDashed from "../List/ItemDashed";

const SearchPlayers = () =>{
    const defaultPlayers:IApiPlayers = { api:{players:[]}}
    const [players, setPlayers] = useState(defaultPlayers)
    function getPlayers(event:any){
        if (event.target.value.length > 4){
            ApiFootball.get('/v2/players/search/' + event.target.value).then((res) =>{
                setPlayers(res.data)
            })
            return players
        }

    }

    return (
        <Container>
            <Input type="text" id="search-players" label="Search Players" placeholder="Enter with player name" validator={getPlayers} />
            <div className="listPlayers">
            {players.api.players.map((el:IPlayer,i:number) =>{
                return(
                    <ItemDashed player_id={el.player_id} key={el.player_id} player_name={el.player_name} nationality={el.nationality} age={el.age} />
                )
            })
            }
            </div>

        </Container>
    );
}

export default SearchPlayers;