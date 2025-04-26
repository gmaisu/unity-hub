import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  text-align: center;
  flex-direction: column;
  align-content: space-around;
  margin-bottom: 60px;
  margin-top: 20px;
  gap: 3rem;
`;

export const BackLink = styled(Link)`
  background-color: #98c18e;
  color: #000000;
  text-decoration: none;
  padding: 15px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 40px;
  border-width: 0;
  cursor: pointer;
  font-family: Gilroy-Light;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const LeftArrow = styled.i`
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 8px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

export const LinkText = styled.p`
  margin: 0 0 0 20px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 99%;
  margin-bottom: 10px;
  text-align: left;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: #3a6e49;
  font-size: 5rem;
  font-weight: bold;
  font-family: "Gilroy";

  @media (max-width: 1280px) {
    font-size: 3rem;
  }

  @media (max-width: 390px) {
    font-size: 2.5rem;
  }
`;

export const Poster = styled.img`
  width: 100%;
`;

export const OtherArticlesParagraph = styled.p`
  margin: 0;
  color: #3a6e49;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Gilroy-Light";

  @media (max-width: 480px) {
    font-size: 3rem;
  }

  @media (max-width: 390px) {
    font-size: 2.5rem;
  }
`;

export const OtherArticlesContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: flex-start;
  flex-direction: row;
  align-content: space-around;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 3rem 7rem;
`;

export const BorderLine = styled.hr`
  border: 1px solid;
  color: #3a6e49;
  width: 100%;
`;
