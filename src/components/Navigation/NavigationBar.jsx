import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import {
  MobileNavWrapper,
  MobileNavContainer,
  MobileNavPaddedContainer,
  NavContainer,
  NavLinks,
  NavLink,
  MobileNavLink,
  MobileNavLinks,
  JoinButton,
  LogoContainer,
  BurgerIcon,
  CorpText,
} from "./styles";

import Logo from "../../assets/logo/logo.svg";

const NavigationBar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const redirect = () => {
    navigate("/");
    
    if (isOpen) {
      toggleMenu();
    }
  };

  if (isMobile)
    return (
      <MobileNavWrapper isopen={isOpen}>
        <MobileNavPaddedContainer>
          <MobileNavContainer>
            <LogoContainer onClick={redirect}>
              <img src={Logo} />
            </LogoContainer>

            <BurgerIcon active={isOpen} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </BurgerIcon>
          </MobileNavContainer>

          <MobileNavLinks isopen={isOpen}>
            <MobileNavLink to="/about" onClick={toggleMenu}>
              O nama
            </MobileNavLink>
            <MobileNavLink to="/services" onClick={toggleMenu}>
              Usluge
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>
              Kontakt
            </MobileNavLink>
            <MobileNavLink to="/blog" onClick={toggleMenu}>
              Fejsbuk
            </MobileNavLink>
          </MobileNavLinks>

          <CorpText active={isOpen}>Unity Hub</CorpText>
        </MobileNavPaddedContainer>
      </MobileNavWrapper>
    );

  return (
    <NavContainer>
      <LogoContainer onClick={redirect}>
        <img src={Logo} />
      </LogoContainer>

      <NavLinks>
        <NavLink to="/about">O nama</NavLink>
        <NavLink to="/services">Usluge</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
        <NavLink to="/blog">Fejsbuk</NavLink>
      </NavLinks>
      <JoinButton>
        <Link
          to="/reservation"
          style={{ textDecoration: "none", color: "#090909" }}
        >
          Pridruži nam se
        </Link>
      </JoinButton>
    </NavContainer>
  );
};

export default NavigationBar;
