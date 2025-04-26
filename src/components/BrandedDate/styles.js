import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 60px;
  height: 60px;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const ParagrapgsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: stretch;
  margin-left: 15px;
  text-align: left;
`;

export const BrandParagraph = styled.p`
  color: #3a6e49;
  margin: 0;
  font-size: 1.3rem;
  font-family: Gilroy;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const DateParagraph = styled.p`
  color: #3a6e49;
  font-size: 1rem;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
