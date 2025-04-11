// src/components/NavigationBar.tsx
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  MobileNavWrapper,
  MobileNavContainer,
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
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (isMobile)
    return (
      <MobileNavWrapper isOpen={isOpen}>
        <MobileNavContainer>
          <LogoContainer>
            <img src={Logo} />
          </LogoContainer>

          <BurgerIcon active={isOpen} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </BurgerIcon>
        </MobileNavContainer>

        <MobileNavLinks isOpen={isOpen}>
          <MobileNavLink to="/about" activeclassname="active">
            O nama
          </MobileNavLink>
          <MobileNavLink to="/services" activeclassname="active">
            Usluge
          </MobileNavLink>
          <MobileNavLink to="/contact" activeclassname="active">
            Kontakt
          </MobileNavLink>
          <MobileNavLink to="/blog" activeclassname="active">
            Fejsbuk
          </MobileNavLink>
        </MobileNavLinks>

        <CorpText active={isOpen}>Unity Hub</CorpText>
      </MobileNavWrapper>
    );

  return (
    <NavContainer>
      <LogoContainer>
        <img src={Logo} />
      </LogoContainer>

      <NavLinks>
        <NavLink to="/about" activeclassname="active">
          O nama
        </NavLink>
        <NavLink to="/services" activeclassname="active">
          Usluge
        </NavLink>
        <NavLink to="/contact" activeclassname="active">
          Kontakt
        </NavLink>
        <NavLink to="/blog" activeclassname="active">
          Fejsbuk
        </NavLink>
      </NavLinks>
      <JoinButton>Pridruži nam se</JoinButton>
    </NavContainer>
  );
};

export default NavigationBar;
