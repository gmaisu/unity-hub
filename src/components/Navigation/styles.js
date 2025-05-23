import { Link } from "react-router-dom";
import styled from "styled-components";

export const MobileNavWrapper = styled.div`
  background-color: #eeeeee;
  box-shadow: 0px 3px 6px #00000073;
  border-radius: 75px;
  margin: 20px 0;
  opacity: 1;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  width: 95%;

  ${({ isopen }) =>
    isopen &&
    `
        width: 100%;
        margin: 0;
        border-radius: 0;
    `};

  @media (max-width: 480px) {
    ${({ isopen }) =>
      isopen &&
      `
            margin: 0;
        `};
  }
`;

export const MobileNavPaddedContainer = styled.div`
  padding: 2rem 3rem;

  @media (max-width: 768px) {
    padding: 0.7rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1.5rem;
  }
`;

export const MobileNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eeeeee;
  padding: 1rem 3rem;
  box-shadow: 0px 3px 6px #00000073;
  border-radius: 75px;
  opacity: 1;

  position: absolute;
  left: 50%;
  transform: translate(-50%, 15%);
  z-index: 999;
  width: 80%;

  @media (max-width: 768px) {
    ${({ isopen }) =>
      isopen &&
      `
        flex-direction: column;
    `}
  }
`;

export const MobileNavLinks = styled.div`
  display: none;
  padding: 20px 10px;
  gap: 8px;

  ${({ isopen }) =>
    isopen &&
    `
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        align-items: flex-start;
    `};
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;

    ${({ isopen }) =>
      isopen &&
      `
          display: block;
    `}
  }
`;

export const MobileNavLink = styled(Link)`
  color: #090909;
  text-decoration: none;
  font-size: 1.4rem;
  position: relative;
  padding: 0.6rem 0;
  border-bottom: 1px solid black;
  width: 100%;
  text-align: left;
  transition: color 0.3s ease;
  font-weight: bold;
  font-family: Gilroy-Thin;
`;

export const NavLink = styled(Link)`
  color: #090909;
  text-decoration: none;
  font-size: 1.4rem;
  position: relative;
  padding: 0.5rem;
  transition: color 0.3s ease;
  font-weight: bold;
  font-family: Gilroy-Thin;

  &:hover {
    color: white;
  }

  ${({ isopen }) =>
    isopen &&
    `
        display: block;
        position: absolute;
        top: 80px;
        right: 30px;
        background-color: #eeeeee;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0px 3px 6px #00000073;
        width: 200px;
        text-align: center;

        & a {
            padding: 0.5rem;
            display: block;
        }
    `}
`;

export const JoinButton = styled.button`
  background-color: #98c18e;
  padding: 15px 18px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 25px;
  border-width: 0;
  cursor: pointer;
  font-family: Gilroy-Light;

  &:hover {
    color: #ffffff;
  }
`;

export const LogoContainer = styled.div`
  width: 70px;
  height: 70px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
  }
`;

export const BurgerIcon = styled.div`
  width: 50px;
  height: 45px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #707070;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }
    &:nth-child(2) {
      top: 18px;
    }
    &:nth-child(3) {
      top: 18px;
    }
    &:nth-child(4) {
      top: 36px;
    }

    ${({ active }) =>
      active &&
      `
        &:nth-child(1) {
            top: 18px;
            width: 0%;
            left: 50%;
        }
        &:nth-child(2) {
            transform: rotate(45deg);
        }
        &:nth-child(3) {
            transform: rotate(-45deg);
        }
        &:nth-child(4) {
            top: 18px;
            width: 0%;
            left: 50%;
        }
    `}
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 25px;

    span {
      height: 2px;

      &:nth-child(1) {
        top: 0px;
      }
      &:nth-child(2) {
        top: 10px;
      }
      &:nth-child(3) {
        top: 10px;
      }
      &:nth-child(4) {
        top: 20px;
      }
    }
  }
`;

export const CorpText = styled.p`
  display: none;
  margin-top: 100px;
  color: #b1ceaa;

  ${({ active }) =>
    active &&
    `
        display:block;
    `}
`;
