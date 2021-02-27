import styled from "styled-components";

const Container = styled.div`
  max-height: 100vh;
  max-width: 100vw;

  height: 100%;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  @media(min-width: 640px){
    flex-direction: row;
  }
`

export default Container