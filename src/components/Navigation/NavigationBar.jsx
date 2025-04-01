// src/components/NavigationBar.tsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../../assets/logo/logo.svg";

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eeeeee;
    padding: 1rem 2.5rem;
    box-shadow: 0px 3px 6px #00000073;
    border-radius: 75px;
    margin: 20px 50px;
    opacity: 1;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 2rem;
`;

const NavLink = styled(Link)`
    color: #090909;
    text-decoration: none;
    font-size: 1.2rem;
    position: relative;
    padding: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
        color: white;
    }
`;

const JoinButton = styled.button`
    background-color: #98c18e;
    padding: 10px 18px;
    font-size: 1.2rem;
    border-radius: 25px;
    border-width: 0;
    cursor: pointer;

    &:hover {
        color: white;
    }
`;

const NavigationBar = () => {
    return (
        <NavContainer>
            <div>
                <img width={60} src={Logo} />
            </div>
            <NavLinks>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/services" activeClassName="active">
                    Services
                </NavLink>
                <NavLink to="/contact" activeClassName="active">
                    Contact
                </NavLink>
                <NavLink to="/blog" activeClassName="active">
                    Blog
                </NavLink>
            </NavLinks>
            <JoinButton>Join US</JoinButton>
        </NavContainer>
    );
};

export default NavigationBar;
