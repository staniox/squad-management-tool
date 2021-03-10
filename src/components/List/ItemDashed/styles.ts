import styled from "styled-components";

export const Container = styled.div`
  cursor: grab;
  border: 2px dashed rgba(238,238,238);
  margin: 5px;
    background: rgb(253,253,253);
    background: linear-gradient(180deg, rgba(253,253,253,1) 0%, rgba(240,240,240,1) 50%, rgba(226,226,226,1) 100%);
    
    border-radius: 2px;
    display: grid;
    grid: "name age"
        "nationality blank";
    padding: 20px;
  
  
  label{
    font-weight: 700;
    color: #585858;
  }
  span{
    color: #d8678b;
  }
  
  .playerName{
    grid-area: name;
  } 
  .playerNationality{
    grid-area: nationality;
  }
  .playerAge{
    grid-area: age;
    justify-self: end;
  }
  
`