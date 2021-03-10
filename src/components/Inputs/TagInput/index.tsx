import React, {useState} from 'react';
import {ContainerExt} from "./styles";

const TagInput = () => {
    const tagDefault:string[] = []
    const [tag, setTag] = useState(tagDefault)
    function createTag(e:any){
        e.preventDefault();
       if(e.target.value.trim() !== "" &&(e.keyCode === 186 || e.keyCode=== 13)){
           setTag([...tag,e.target.value])
           e.target.value = ""
       }
    }
    function removeTag(i:number,j:any){
        j.preventDefault();
        const newTags = [ ...tag ];
        newTags.splice(i, 1);
        setTag(newTags)
    }
    return (
        <ContainerExt>
            <label className={"input-label"} >Tags</label>
            <input type="text" className={"inputs-items"} onKeyDown={(e)=>{if (e.keyCode ===186 || e.keyCode=== 13 ) createTag(e)}}/>
            <ul>
                {tag && tag.map((el:string,i) =>{
                    return(
                        <li key={i}>{el} <button type={"button"} onClick={(j) =>{removeTag(i,j)}}>x</button></li>
                        )
                })
                }
            </ul>


        </ContainerExt>
    );
};

export default TagInput;