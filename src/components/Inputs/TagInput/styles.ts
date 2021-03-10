import styled from "styled-components";
import {Container} from "../styles";

export  const ContainerExt = styled(Container)`
  ul{
    display: flex;
    overflow: auto;
  }
  li{
    font-weight: 400;
    padding: 4px;
    margin: 2px;
    border-radius: 15px;
    display: flex;
    background-color: #c50341;
    color: rgba(255,255,255,0.6);;
  }
  button{
    cursor: pointer;
    text-decoration: none;
    border: 0;
    outline: 0;
    background: transparent;
    margin: 3px ;
    color: rgba(255,255,255);
  }
`