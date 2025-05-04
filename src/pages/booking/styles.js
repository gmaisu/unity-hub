import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  align-content: space-around;
  gap: 3rem;
  color: #ffffff;
  padding: 15rem 0 5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
    
  @media (max-width: 480px) {
    padding: 10rem 0 5rem 0;
  }
`;