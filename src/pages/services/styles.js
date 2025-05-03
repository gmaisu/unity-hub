import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  align-content: space-around;
  gap: 3rem;
  padding: 1rem 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }

  @media (max-width: 480px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 390px) {
    padding: 1rem;
  }
`;
