import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background-color: #3a6e49;
  color: #ffffff;
  text-align: center;
  font-size: 1rem;
  font-family: "Gilroy-Light";
  font-weight: lighter;
`;

export const PaddingDiv = styled.div`
  padding: 3rem;

  @media (max-width: 1024px) {
    padding: 3rem 1rem;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  font-family: Gilroy;
  font-weight: bold;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;

export const FooterText = styled.div`
  text-align: center;
  font-family: "Gilroy-Light";
  font-weight: lighter;
  flex: 1;
  font-size: 1.2rem;
`;

export const FollowUsSpan = styled.span`
  font-size: 1.4rem;
  height: 32px;
`;
