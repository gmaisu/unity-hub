import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  flex: 25%;

  &:hover a {
    display: block;
  }

  @media (max-width: 768px) {
    flex: 100%;
  }
`;

export const PostImage = styled.img`
  width: 100%;
`;

export const Title = styled.p`
  color: #3a6e49;
  text-align: left;
  margin: 8px 0;
  font: normal 600 40px / 50px Gilroy-Thin;

  @media (max-width: 480px) {
    font-size: 25px;
    line-height: 30px;
  }
`;

export const Description = styled.p`
  color: #3a6e49;
  text-align: left;
  margin: 8px 0;
  height: 90px;
  font: 25px Gilroy-Light;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);

  @media (max-width: 768px) {
    font-size: 20px;
    height: 70px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const ReadRedirectLink = styled(Link)`
  display: none;
  background-color: #98c18e;
  color: #000000;
  text-decoration: none;
  padding: 15px 50px;
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 25px;
  border-width: 0;
  cursor: pointer;
  font-family: Gilroy-Light;

  @media (max-width: 768px) {
    display: block;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
