import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 100%;
  transform: scale(1);
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;

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
  #panel-content{
    transform: scale(0.9);
  }

  @media(min-width: 321px){
    transform: scale(0.96);
    #panel-content{
      transform: scale(1);
    }
  }
  

`

export default Card