import React from "react";
import {
  Container,
  Title,
  MapContainer,
  AddressContainer,
  AddressText,
  SocialText,
  ContactInfo,
  ContactItem,
  ContactTitle,
} from "./styles.js";

export const Map = () => {
  return (
    <MapContainer>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.6337203917665!2d20.4631807!3d44.8086528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa8b1e53ed9%3A0x49b435d0e1f821fa!2sKralja%20Milana%2026%2C%20Beograd%2011000%2C%20Serbia!5e0!3m2!1sen!2sge!4v1743674363698!5m2!1sen!2sge"
        width="100%"
        height="300"
        loading="lazy"
      />
    </MapContainer>
  );
};

const Location = () => {
  return (
    <Container>
      <Title>Ostanite u kontaktuе</Title>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.6337203917665!2d20.4631807!3d44.8086528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa8b1e53ed9%3A0x49b435d0e1f821fa!2sKralja%20Milana%2026%2C%20Beograd%2011000%2C%20Serbia!5e0!3m2!1sen!2sge!4v1743674363698!5m2!1sen!2sge"
          width="100%"
          height="300"
          loading="lazy"
        />
      </MapContainer>

      <AddressContainer>
        <AddressText>Kralja Milana 26, 11000 Belgrade, Serbia</AddressText>
      </AddressContainer>
      <hr style={{ border: "1px solid" }} />
      <p>
        Obratite nam se da se raspitate ili rezervišete sastanak. Jednostavno
        popunite obrazac za upit ili nas pozovite.
      </p>

      <ContactInfo>
        <ContactItem>
          <ContactTitle>
            <SocialText>E-pošta: </SocialText> kontakt@terapijskiprostor.com
          </ContactTitle>
        </ContactItem>
        <ContactItem>
          <ContactTitle>
            <SocialText>Telefon: </SocialText> +381 62 8920608
          </ContactTitle>
        </ContactItem>
      </ContactInfo>
    </Container>
  );
};

export default Location;
