import styled from "styled-components";

export const Container = styled.div`
    
    .input-content{
      width: 90%;
      display: flex;
    }
  .input-content label{
    width: 50%;
  }
      
    display: flex;
    flex-direction: column;
    font-weight: 700;
    width: 90%;
    margin: 6px;
    border-color: #efefef;
  
  
  .inputs-items{
    width: 80%;
    border: 1px solid #e6e6e6;
    outline: none;
    border-radius: 2px;
  }
  .input-label{
    margin: 5px 0;
  }
  

   input[type='radio'] {
    visibility: hidden;
    width: 20px;
    height: 20px;
    margin: 0 5px 0 5px;
    padding: 0;
     outline: none;
  }
   input[type=radio]:before {
     outline: none;
    position: relative;
    margin: 4px -25px -4px 0;
    display: inline-block;
    visibility: visible;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #cbcbcb;
    content: "";
  }
   input[type=radio]:checked:after {
    position: relative;
    top: 1px;
    left: 4px;
    display: inline-block;
    visibility: visible;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    content: "";
  }
   input[type=radio]:checked:after {
     background: rgb(180,61,124);
     background: radial-gradient(circle, rgba(180,61,124,1) 0%, rgba(155,63,133,1) 100%);
  }
  

  label {
    display: inline-block;
    height: 25px;
    line-height: 25px;
    margin: 0;
    padding: 0;
  }
  
  
  .error{
    color: #d1396a;
    border: 2px solid #cc8ca0;
  }
    
`