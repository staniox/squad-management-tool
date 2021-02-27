import styled from "styled-components";
import {Link} from "react-router-dom";

const Button = styled(Link)`
  padding: 5px;
  border: none;
  outline: none;
  width: 35px;
  height: 35px;
  text-decoration: none;
  background: rgb(169,58,123);
  background: linear-gradient(180deg, rgba(169,58,123,1) 0%, rgba(130,51,129,1) 100%);
  color: white;
  
  border-radius: 10px;

  font-size: 23pt;
  font-weight: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export default Button