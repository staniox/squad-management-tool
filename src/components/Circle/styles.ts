import styled from "styled-components";
const Border = styled.div`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23A86CBAFF' stroke-width='2' stroke-dasharray='12' stroke-dashoffset='86' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 100px;
  //border-radius: 50%;
  padding: 4px;
  color: #a86cba;
  width: 45px;
  height: 45px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  
  &.${props => props.className === 'circle-15' ? props.className : null}{
    justify-self: end;
  }  
  &.${props => props.className === 'circle-25' ? props.className : null}{
    grid-column: 3;
    justify-self: start;
  }  
  &.${props => props.className === 'circle-11' ? props.className : null}{
    grid-column: 1/-1;
  }
  &.${props => props.className === 'circle-14' ? props.className : null}{
    grid-column: 1/-1;
  }
  &.${props => ( props.className === 'circle-12' ) ? props.className : null}{
    justify-self: end;
  }
  &.${props => ( props.className === 'circle-22' ) ? props.className : null}{
    grid-column: 3;
    justify-self: start;
  }
  
  
  
  
  
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
  
  //*:before{
  //  background-color: #FFFFFF;
  //  content: "";
  //  height: 10px;
  //  position: absolute;
  //  top: -8px;
  //  width: 100%;
  //}
`

export default Border
