import React from 'react';
import {Container} from "./styles";
import {IShortPlayer} from "../../../interfaces";
import {useDrag} from "react-dnd";
interface DropResult {
    name: string
}
const ItemDashed = (props:IShortPlayer) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'ITEMDASHED',
        item: props,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))
    return (
        <Container ref={drag}>
                <span className="playerName"> <label>Name: </label> {props.player_name}</span>
                <span className="playerNationality"> <label>Nationality: </label> {props.nationality}</span>
                <span className="playerAge"> <label>Age: </label>{props.age}</span>
        </Container>
    );
};

export default ItemDashed;