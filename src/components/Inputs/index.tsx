import React, {EventHandler, useState} from 'react';
import {Container} from './styles'
import {IInput} from "../../interfaces";

const Input = (props:IInput) => {
    const [tag, setTag] = useState("")

    function validateEmpty (event:any){
        if (!event.target.value.trim()){
            event.target.classList.remove('error')
            event.target.classList.add('error')
            event.target.labels[0].classList.remove('error')
            event.target.labels[0].classList.add('error')
        }else {
            event.target.classList.remove('error')
            event.target.labels[0].classList.remove('error')
        }
    }

    return (
        <Container>
            <label className={"input-label"} htmlFor={props.id}>{props.label}</label>
            <div className="input-content">
            {
            props.radio && props.radio.items.map((el)=>{
                return(
                    <label> <input className={"inputs-radio"} type="radio" value={el.value} onChange={(e:any)=>{setTag(e.target.value)}} checked={tag === el.value}/>{el.label}</label>
                )
            })
            }
            {!props.radio &&
            <input  id={props.id} className={"inputs-items"} name={props.id} type={props.type} placeholder={props.placeholder || ""} onChange={validateEmpty && props.validator}/>
            }
            </div>
        </Container>

        );
}

export default Input;