import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  align-content: space-around;
  margin-bottom: 60px;
  gap: 3rem;
`;

export const Header = styled.h1`
  margin: 0;
  text-align: left;
  width: 100%;
  color: #3a6e49;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Gilroy";

  @media (max-width: 480px) {
    font-size: 3rem;
  }

  @media (max-width: 390px) {
    font-size: 2.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: flex-start;
  flex-direction: row;
  align-content: space-around;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 3rem 7rem;
`;