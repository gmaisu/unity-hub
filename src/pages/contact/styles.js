import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: space-around;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const TextContainer = styled.div`
    text-align: left;
    padding: 0 1rem;
    color: #3a6e49;
    flex: 1;
`;

export const MobileTitle = styled.p`
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
`;


export const SocialText = styled.span`
    font-weight: bold;
    font-family: "Gilroy";
`;

export const ContactInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 3rem;
    font-size: 1rem;
    flex-direction: column;

      @media (max-width: 768px) {
margin-bottom: 1rem;
  }
`;

export const ContactItem = styled.div`
    text-align: left;
`;

export const ContactTitle = styled.div`
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

export const MapContainer = styled.div`
    border-radius: 6rem;
    overflow: hidden;
    margin: 3rem;
    border-style: solid;
    width:100%;
`;