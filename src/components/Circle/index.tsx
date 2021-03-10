import React from 'react';
import Border from "./styles";
import {ICircle, IShortPlayer} from "../../interfaces";
import {useDrop} from "react-dnd";
let itemDragged:IShortPlayer;
const Circle = (props:ICircle) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'ITEMDASHED',
        drop: () => ({ name: 'Circle' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            item:monitor.getItem(),
        }),
        hover(item:IShortPlayer,monitor){
             itemDragged = item
        }
    }))

    const isActive = canDrop && isOver
    let opacity=1;
    if (isActive) {
       opacity = 0.25
    } else if (canDrop) {
        opacity = 0.5
    }

    return (
        <Border ref={drop} role={'Circle'} className={props.class}  >
            <div>
              <span>{itemDragged && (itemDragged.player_name[0] + itemDragged.player_name[1]) || '+'}</span>
            </div>
        </Border>

    );
};

export default Circle;
