import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  transform: scale(0.96);
  margin-top: 1em;
  background-color: #fff;
  border-radius: 10px;

  hr{
    display: block;
    height: 1px;
    border: 0 #eeeeee; 
    margin: 1em 0; 
    padding: 0;
    color: #eeeeee;
    background-color: #eeeeee;
  }

  header{
    color: ${props => props.color || "#5c358f"};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 2em;
  }
  
  div{
    margin: 1em;
  }

`

export default Card