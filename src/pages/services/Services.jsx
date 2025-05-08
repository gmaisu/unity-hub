import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import Carousel from "../../components/Carousel/Carousel.jsx";

import {
  Wrapper,
  Header,
  Paragraph,
  BoldParagraph,
  RowSection,
  ColumnSection,
  BulletedList,
  BulletedIem,
  SectionBulletHeader,
  RightPhoto,
  ColumnedSection,
  RoomsContainer,
  BorderLine,
  ImagesSlider,
  RoomSectionParagraph,
  Button,
  RoomsSectionBulletItem,
  SliderImage,
  BottomSection,
  BottomParagraph,
} from "./styles.js";

import ROOMS_INFO from "./data.js";

const RoomsInfo = ({ title, photos, paragraph, bullets }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <RoomsContainer>
      <SectionBulletHeader>{title}</SectionBulletHeader>
      <BorderLine />

      {isMobile ? (
          <Carousel photos={photos} />
      ) : (
        <ImagesSlider>
          {photos.map((item, index) => (
            <SliderImage key={index} src={item} />
          ))}
        </ImagesSlider>
      )}

      <RoomSectionParagraph>{paragraph}</RoomSectionParagraph>

      <BulletedList color="#3A6E49">
        {bullets.map((item, index) => (
          <RoomsSectionBulletItem key={index}>{item}</RoomsSectionBulletItem>
        ))}
      </BulletedList>

      <Button>
        <Link
          to="/booking"
          style={{ textDecoration: "none", color: "#090909" }}
        >
          Rezervišite prostor
        </Link>
      </Button>
    </RoomsContainer>
  );
};

const Services = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Wrapper>
      <RowSection>
        <ColumnSection>
          <Header>Usluge</Header>
          <br />
          <Paragraph>
            Tražite savršen prostor za vašu psihološku praksu? Unity Hub nudi
            izuzetno udobne sobe za terapije - male, srednje i velike - dostupne
            za fleksibilno iznajmljivanje po satu putem jednostavnog online
            bukinga.
            <br /> <br />
            Osetite razliku: Naši pažljivo dizajnirani prostori pružaju mirnu i
            prijatnu atmosferu, ključnu za efikasan rad sa vašim klijentima.
            Uživajte u potpunoj privatnosti i komforu koji će ceniti i vaši
            korisnici.
          </Paragraph>

          <br />
          <BoldParagraph>Zašto baš Unity Hub?</BoldParagraph>

          <BulletedList>
            <BulletedIem>
              Maksimalna fleksibilnost: Rezervišite prostor kada vam je
              potreban, bez obaveze dugoročnih ugovora za povremeno korišćenje.
            </BulletedIem>
            <BulletedIem>
              Izuzetan komfor: Naše sobe su opremljene da stvore umirujuće i
              profesionalno okruženje.
            </BulletedIem>
            <BulletedIem>
              Jednostavno online bukiranje: Zakažite svoj termin brzo i lako
              putem naše web stranice.
            </BulletedIem>
            <BulletedIem>
              Mogućnost dugoročne saradnje: Ukoliko želite da postanete deo
              našeg tima, nudimo i atraktivne dugoročne ugovore za stabilnu
              praksu.
            </BulletedIem>
          </BulletedList>
        </ColumnSection>
        <div>
          <RightPhoto src="https://terapijskiprostor.com/images/services_1.webp" />
        </div>
      </RowSection>
      <ColumnedSection>
        <BulletedList color="#3A6E49">
          {Object.keys(ROOMS_INFO).map((type) => (
            <RoomsInfo
              key={type}
              title={ROOMS_INFO[type].title}
              photos={ROOMS_INFO[type].photos}
              paragraph={ROOMS_INFO[type].paragraph}
              bullets={ROOMS_INFO[type].bullets}
            />
          ))}
        </BulletedList>
      </ColumnedSection>
      <BottomSection>
        <BottomParagraph>
          Pridružite se zajednici uspešnih psihologa u Unity{" "}
          {isMobile ? <></> : <br />} Hub-u! Kontaktirajte nas za više
          informacija ili {isMobile ? <></> : <br />}rezervišite svoj idealan
          prostor online već danas!
        </BottomParagraph>
      </BottomSection>
    </Wrapper>
  );
};

export default Services;
