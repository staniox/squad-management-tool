import styled from "styled-components";

const Border = styled.div`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23A86CBAFF' stroke-width='3' stroke-dasharray='6%2c 13' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 50%;
  padding: 3px;
  color: #a86cba;
  width: 80px;
  height: 80px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    border-style: solid;
    border-radius: 50%;
    border-width: 0.5px;
    width: 100%;
    height: 100%;

    

    color: #7a2f62;
   
    background-color: #bf97bf;


  }
  
  div span{
    color: #e7d8e7;
    
  }
  
  *:before{
    background-color: #FFFFFF;
    content: "";
    height: 10px;
    position: absolute;
    top: -8px;
    width: 100%;
  }
`

export default Border
