import React, {useEffect, useState} from 'react';
import ApiFootball from "../../services/ApiFootball";



function Index(props:any) {
    const [players, setPlayers] = useState([])
    function getPlayers(){
        ApiFootball.get('/v2/players/search/' + props.name).then((res) =>{
            console.log(res.data)
            setPlayers(res.data)
        })
    }

    useEffect(getPlayers,[]);

    return (
        <div>
            <input type="text"/>

        </div>
    );
}

export default Index;