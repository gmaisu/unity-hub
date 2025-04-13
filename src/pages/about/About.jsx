import React from "react";
import { Link } from "react-router-dom";

import { Container, LogoContainer, Header, Description, JoinButton } from "./styles.js";

import Logo from "../../assets/logo/logo.svg";

const About = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} />
      </LogoContainer>
      <Header>O nama</Header>
      <Description>
        Unity Hub je moderan prostor za iznajmljivanje u Beogradu, Kralja Milana
        26, namenjen psihoterapeutima, privatnim predavačima i studentima.
        Rezervišite sobe za terapiju ili radne prostore kroz jednostavan sistem
        imenovanja po satu.
      </Description>
      <JoinButton>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "#090909" }}
        >
          Rezervišite prostor
        </Link>
      </JoinButton>
    </Container>
  );
};

export default About;
