import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: space-around;
`;

export const VideoContainer = styled.video`
  width: 100%;
`;

export const MainOverlayText = styled.p`
  position: absolute;
  top: 30%;
  left: 25%;
  width: 40%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 6rem;
  text-align: center;
  font-weight: bold;
  z-index: 1;
  font-family: "Gilroy";
  text-shadow: 0px 3px 6px #00000073;

  @media (max-width: 1440px) {
    width: 50%;
  }

  @media (max-width: 1280px) {
    font-size: 3.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    left: 0;
    transform: none;
    font-size: 3rem;
    width: 100%;
  }

  ${({ ismobile }) =>
    ismobile &&
    `
        position: unset;
    `};
`;

export const ButtonsSection = styled.div`
  position: absolute;
  top: 70%;
  left: 60%;
  width: 30%;

  @media (max-width: 1680px) {
    top: 60%;
  }

  @media (max-width: 1440px) {
    left: 55%;
    width: 40%;
  }

  @media (max-width: 1024px) {
    left: 50%;
    width: 45%;
  }

  @media (max-width: 768px) {
    top: 55%;
    left: 0;
    font-size: 2rem;
    width: 100%;
  }

  ${({ ismobile }) =>
    ismobile &&
    `
      position: unset;
    `};
`;

export const MobileContainer = styled.div`
  background-color: #3a6e49;
  padding: 10rem 4rem 5rem;

  @media (max-width: 768px) {
    padding: 8rem 1rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 6rem 1rem 2rem;
  }
`;

export const SecondOverlayText = styled.p`
  color: #eeeeee;
  font-size: 2rem;
  text-align: left;
  text-shadow: 0px 3px 6px #00000073;

  @media (max-width: 1440px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const RowButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  gap: 2rem;
`;

export const Button = styled.button`
  background-color: #98c18e;
  padding: 20px 40px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 50px;
  border-width: 0;
  cursor: pointer;
  font-family: Gilroy-Light;

  @media (max-width: 1440px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  &:hover {
    color: #ffffff;
  }
`;

export const RowSection = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 3rem;
  width: 100%;
  align-content: space-around;
  justify-content: space-around;
  padding: 30px 0;

  ${({ color }) =>
    color &&
    `
        background-color: ${color};
    `};

  ${({ width }) =>
    width &&
    `
        width: ${width};
    `};

  ${({ bgphoto }) =>
    bgphoto &&
    `
        background-image: url(${bgphoto});
        background-size: cover;
    `};

  ${({ padding }) =>
    padding &&
    `
        padding: ${padding};
    `};

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

export const VideoSection = styled.div`
  position: relative;
  width: 100%;
`;

export const ColumnSection = styled.div`
  flex: 50%;

  ${({ flex }) =>
    flex &&
    `
        flex: ${flex};
    `};
`;

export const GreenBigText = styled.p`
  color: #3a6e49;
  text-align: left;
  width: 80%;
  margin: 0;
  font-size: 4rem;
  font-family: "Gilroy";
  font-weight: bold;

  @media (max-width: 1280px) {
    width: 95%;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

`;

export const BorderLine = styled.hr`
  border: 1px solid;
  color: #3a6e49;
  width: 100%;
`;

export const BulletedList = styled.ul`
  color: #3a6e49;
  text-align: left;
  padding: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BulletedIem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  font-size: 3rem;
  line-height: 200%;

  &::before {
    content: "•";
    font-size: 13rem;
    margin-right: 10px;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;

    &::before {
      font-size: 6rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 390px) {
    font-size: 1.2rem;
  }
`;

export const WhiteBigText = styled.p`
  color: #eeeeee;
  text-align: left;
  margin: 0;
  font-size: 6rem;
  font-family: "Gilroy";
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  ${({ shadow }) =>
    shadow &&
    `
          text-shadow: 0px 3px 6px #00000073;
    `};

  ${({ textAlign }) =>
    textAlign &&
    `
          text-align: ${textAlign};
    `};

  ${({ fontSize }) =>
    fontSize &&
    `
          font-size: ${fontSize};
    `};
`;

export const ThirdSectionInnerText = styled.p`
  color: #eeeeee;
  font-size: 3rem;
  text-align: left;
  text-shadow: 0px 3px 6px #00000073;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const FourthSectionInnerText = styled(ThirdSectionInnerText)`
  font-size: 2rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const RightPhoto = styled.img`
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const FlexColumnStartSection = styled(RowSection)`
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  padding: 50px 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://terapijskiprostor.com/images/background-landing-two.webp");
    background-size: cover;
    background-position: center;
    filter: brightness(50%);
    z-index: -1;
  }
`;

export const PaddedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 100px;

  @media (max-width: 1366px) {
    padding: 90px;
  }

  @media (max-width: 1280px) {
    padding: 45px;
  }

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;
