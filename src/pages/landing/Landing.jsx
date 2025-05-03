import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import {
  Container,
  VideoSection,
  VideoContainer,
  MobileContainer,
  RowSection,
  FlexColumnStartSection,
  ColumnSection,
  BorderLine,
  GreenBigText,
  WhiteBigText,
  RightPhoto,
  BulletedList,
  BulletedIem,
  MainOverlayText,
  SecondOverlayText,
  ButtonsSection,
  ButtonsContainer,
  RowButtonsContainer,
  Button,
  ThirdSectionInnerText,
  FourthSectionInnerText,
  PaddedContainer
} from "./styles.js";

const Landing = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Container>
      <VideoSection>
        {isMobile ? (
          <MobileContainer>
            <MainOverlayText ismobile>Vaš prostor za terapiju i rast</MainOverlayText>
            <ButtonsSection ismobile>
              <SecondOverlayText>
                Osnaživanje stručnjaka za mentalno zdravlje sa fleksibilnim,{" "}
                <br />
                pristupačnim i bezbednim prostorima
              </SecondOverlayText>
              <ButtonsContainer>
                <Button>
                  <Link
                    to="/booking"
                    style={{ textDecoration: "none", color: "#090909" }}
                  >
                    Rezervišite prostor
                  </Link>
                </Button>
                <Button>
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "#090909" }}
                  >
                    Pridruži nam se
                  </Link>
                </Button>
              </ButtonsContainer>
            </ButtonsSection>
          </MobileContainer>
        ) : (
          <>
            <VideoContainer autoPlay muted loop>
              <source
                src="https://terapijskiprostor.com/images/landing.webm"
                type="video/webm"
              />
              <source
                src="https://terapijskiprostor.com/images/landing.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML5 video.
            </VideoContainer>
            <MainOverlayText>Vaš prostor za terapiju i rast</MainOverlayText>
            <ButtonsSection>
              <SecondOverlayText>
                Osnaživanje stručnjaka za mentalno zdravlje sa fleksibilnim,{" "}
                <br />
                pristupačnim i bezbednim prostorima
              </SecondOverlayText>
              <ButtonsContainer>
                <Button>
                  <Link
                    to="/booking"
                    style={{ textDecoration: "none", color: "#090909" }}
                  >
                    Rezervišite prostor
                  </Link>
                </Button>
                <Button>
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "#090909" }}
                  >
                    Pridruži nam se
                  </Link>
                </Button>
              </ButtonsContainer>
            </ButtonsSection>
          </>
        )}
      </VideoSection>
      <RowSection color={"#eeeeee"} width={"90%"}>
        <ColumnSection>
          <GreenBigText>
            Da li ste psiholog koji tražite prostor za upoznavanje svojih
            klijenata? Pridružite se našoj rastućoj mreži danas.
          </GreenBigText>
          <BorderLine />
          <BulletedList>
            <BulletedIem>Fleksibilna rezervacija</BulletedIem>
            <BulletedIem>Potpuno opremljene sobe</BulletedIem>
            <BulletedIem>Pristupačne cene po satu</BulletedIem>
            <BulletedIem>Bezbedno i poverljivo okruženje</BulletedIem>
          </BulletedList>
        </ColumnSection>
        <div>"
          <RightPhoto src="https://terapijskiprostor.com/images/background-landing-one.webp" />
        </div>
      </RowSection>
      <FlexColumnStartSection>
        <PaddedContainer>
          <WhiteBigText shadow>
            Pronađite Idealnu Sobu za <br /> Vašu Psihološku Praksu.
          </WhiteBigText>
          <ThirdSectionInnerText>
            U Unity Hub-u nudimo raznovrsne, udobne i <br /> privatne prostore
            za psihologe: od manjih soba <br /> za individualne sesije do
            prostranih za grupne <br /> radionice. Otkrijte našu ponudu i
            pronađite <br />
            savršen ambijent za rad sa vašim klijentima.
          </ThirdSectionInnerText>
          <Button style={{ marginTop: "120px" }}>
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "#090909" }}
            >
              Pogledajte Naše Usluge
            </Link>
          </Button>
        </PaddedContainer>
      </FlexColumnStartSection>
      <RowSection color={"#3A6E49"} padding="60px 0 120px 0">
        <ColumnSection>
          <WhiteBigText textAlign="center" fontSize="7rem">
            Idealno mesto za vaš <br /> rad i rast vaše prakse.
          </WhiteBigText>
          <FourthSectionInnerText>
            Kontaktirajte nas danas da se raspitate o našim uslugama ili
            rezervišete sastanak
          </FourthSectionInnerText>
          <RowButtonsContainer>
            <Button>
              <Link
                to="/booking"
                style={{ textDecoration: "none", color: "#090909" }}
              >
                Rezervišite prostor
              </Link>
            </Button>
            <Button>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "#090909" }}
              >
                Pridruži nam se
              </Link>
            </Button>
          </RowButtonsContainer>
        </ColumnSection>
      </RowSection>
    </Container>
  );
};

export default Landing;
