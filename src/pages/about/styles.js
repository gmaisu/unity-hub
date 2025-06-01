import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  align-content: space-around;
  background-image: url("https://terapijskiprostor.com/images/about.webp");
  background-size: cover;
  gap: 3rem;
  color: #ffffff;
  padding: 15rem 0 5rem 0;
  min-height: 70vh;

  @media (max-width: 768px) {
    background-image: url("https://terapijskiprostor.com/images/about-mobile.webp");
    flex-direction: column;
    gap: 0;
  }

  @media (max-width: 480px) {
    padding: 10rem 0 5rem 0;
  }
`;

export const LogoContainer = styled.div`
  width: 160px;
  height: 160px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const Header = styled.h1`
  margin: 0;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Gilroy";
`;

export const Description = styled.p`
  font-size: 2rem;
  width: 50%;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    width: 100%;
  }
`;

export const JoinButton = styled.button`
  background-color: #98c18e;
  padding: 20px 25px;
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 25px;
  border-width: 0;
  cursor: pointer;
  font-family: Gilroy-Light;

  &:hover {
    color: #ffffff;
  }
`;
