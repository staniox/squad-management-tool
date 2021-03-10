import styled from "styled-components";

export const Container =styled.div`
  background: rgb(177,59,124);
  background: linear-gradient(135deg, rgba(177,59,124,1) 0%, rgba(114,43,128,1) 100%);
  width: 320px;
  min-height: 450px;
  border-radius: 3px;
  padding: 5px;
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: space-evenly;
  grid-template-columns: repeat(3,1fr);
  overflow: auto;

  transform: scale(0.9);
  
  #mid-line{
    width: 100%;
  }
  
  #circle{
   
    border-radius: 50%;
    border: 1px solid #eeeeee;
    width: 100px;
    height: 100px ;
   
  }
  .soccerLines{
    opacity: 0.2;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  
  @media(min-width: 321px){
    transform: scale(1);
  }

`

export const Select = styled.div`
  margin: 6px;
  width: 90%;
  select{
    border: 1px solid #e6e6e6;
    outline: none;
    border-radius: 2px;
  }
  label{
    font-weight: 700;
  }
`

