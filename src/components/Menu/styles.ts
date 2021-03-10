import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
  max-height: 7vh;
  max-width: 100vw;
  
  height: 100px;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;

  background: rgb(192,14,78);
  background: linear-gradient(90deg, rgba(192,14,78,1) 0%, rgba(138,32,111,1) 100%);
  
  section{
    height: 100%;
    display: flex;
    align-items: center;
  }
  

  
  span{
    color: #ffffff;
    margin:0 1em;
  }
  
  span .circle{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border-color: #fff;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1em;
  }
  
  .desktop{
    display: none;
  }
  
  @media(min-width: 460px){
    .desktop{
      display: inline-flex;
    }
  }
  
`

export const StyledLink = styled(Link)`
    height: 100%;
    display: flex;
    img {
      height: 100%;
      transform: scale(0.88);
      margin-left:1.5em;
    }
`

export default {StyledLink, Container}
