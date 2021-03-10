import React from "react";
import {Container, StyledLink} from "./styles"
import logo from "../../assets/img/logo-venturus.svg"
const index = () => {
    return(
        <Container>
            <section>
                <StyledLink to='/' ><img src={logo} alt='new' /></StyledLink>
                <span className="desktop">Squad Management Tool</span>
            </section>
            <section>
                <span>John Dee</span>
                <span className="circle">JD</span>
            </section>

        </Container>
        )
}

export default  index