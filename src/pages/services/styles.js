import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  align-content: space-around;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;