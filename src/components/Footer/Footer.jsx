import React from "react";
import { useMediaQuery } from "react-responsive";

import {
  FooterContainer,
  SocialContainer,
  SocialIconsContainer,
  PaddingDiv,
  FooterContent,
  FooterText,
  FollowUsSpan,
} from "./styles";

import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import WhatsappIcon from "../../assets/icons/whatsapp.svg";

const SocialInfo = () => {
  return (
    <SocialContainer>
      <FollowUsSpan>Pridružite nam se</FollowUsSpan>

      <SocialIconsContainer>
        <a
          href="https://www.facebook.com/61573161985725/"
          target="_blank"
          style={{ width: "32px", height: "32px" }}
        >
          <img
            className="social-icon"
            src={FacebookIcon}
            width={32}
            height={32}
          />
        </a>
        <a
          href="https://www.instagram.com/unityhub.belgrade"
          target="_blank"
          style={{ width: "32px", height: "32px" }}
        >
          <img
            className="social-icon"
            src={InstagramIcon}
            width={32}
            height={32}
          />
        </a>
        <a
          href="https://wa.me/381628920608"
          target="_blank"
          style={{ width: "32px", height: "32px" }}
        >
          <img
            className="social-icon"
            src={WhatsappIcon}
            width={32}
            height={32}
          />
        </a>
      </SocialIconsContainer>
    </SocialContainer>
  );
};

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <FooterContainer>
      <PaddingDiv>
        {isMobile ? (
          <>
            <FooterText>© 2025 Unityhub</FooterText>
            <FooterText>Sva prava zadržana</FooterText>
            <hr />
            <SocialInfo />
          </>
        ) : (
          <>
            <FooterContent>
              <SocialInfo />
              <FooterText>© 2025 Unityhub. Sva prava zadržana.</FooterText>
              <FooterText></FooterText>
            </FooterContent>
            <hr />
          </>
        )}
      </PaddingDiv>
    </FooterContainer>
  );
};

export default Footer;
