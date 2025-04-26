import React from "react";

import {
  Container,
  LogoImage,
  ParagrapgsContainer,
  BrandParagraph,
  DateParagraph,
} from "./styles.js";

import Logo from "../../assets/logo/logo.svg";

const toFormattedDate = (timestamp) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short", // abbreviated month name
    day: "2-digit", // 2-digit day
    year: "numeric", // full year
  }).format(new Date(timestamp));
};

const BrandedDate = ({ timestamp }) => {
  return (
    <Container>
      <LogoImage src={Logo} />
      <ParagrapgsContainer>
        <BrandParagraph>Unity Hub</BrandParagraph>
        <DateParagraph>{toFormattedDate(timestamp)}</DateParagraph>
      </ParagrapgsContainer>
    </Container>
  );
};

export default BrandedDate;
