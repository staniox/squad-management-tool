import styled from "styled-components";

export const Container = styled.fieldset`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border: 0;
  width: auto;
  padding: 0;
  
  
 
 
  
  legend{
    width: auto;
    margin-left: auto;
    margin-right: auto;
    color: #999999;
    font-weight: 700;
  }
  
  
  .content{
    flex-direction: column;
    width: 100%;
  }

  .flex-start{
    display: flex;
    justify-content: flex-start;
  }

  @media(min-width: 560px){
    flex-direction: row;
    padding: 20px;
    margin: 20px;
  }

`