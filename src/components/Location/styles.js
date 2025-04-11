import styled from "styled-components";

export const Container = styled.div`
    text-align: left;
    padding: 0 1rem;
    color: #3a6e49;
    flex: 1;
`;

export const Title = styled.p`
    font-size: 4rem;
    font-weight: bold;
    margin: 0;
`;

export const AddressContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`;

export const AddressText = styled.div`
    flex: 1;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Gilroy";
`;

export const SocialText = styled.span`
    font-weight: bold;
    font-family: "Gilroy";
`;

export const MapContainer = styled.div`
    border-radius: 3rem;
    overflow: hidden;
    margin-bottom: 2rem;
    border-style: solid;
`;

export const ContactInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 3rem;
    font-size: 1rem;
    flex-direction: column;
`;

export const ContactItem = styled.div`
    text-align: left;
`;

export const ContactTitle = styled.div`
    font-weight: bold;
    margin-bottom: 0.5rem;
`;
