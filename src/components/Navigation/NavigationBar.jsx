// src/components/NavigationBar.tsx
import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
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
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const redirect = () => {
    navigate("/");
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
        </MobileNavPaddedContainer>
      </MobileNavWrapper>
    );

  return (
    <NavContainer>
      <LogoContainer onClick={redirect}>
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
      <JoinButton>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "#090909" }}
        >
          Pridruži nam se
        </Link>
      </JoinButton>
    </NavContainer>
  );
};

export default NavigationBar;
