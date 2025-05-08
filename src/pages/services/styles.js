import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: space-around;
`;

export const RowSection = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 3rem;
  background-color: #3a6e49;
  align-content: space-around;
  justify-content: space-around;
  padding: 12rem 9rem 5rem;

  @media (max-width: 1280px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 10rem 2rem 5rem;
  }

  @media (max-width: 480px) {
    padding: 8rem 1.5rem 1rem;
  }
`;

export const Header = styled.p`
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
`;

export const Paragraph = styled.p`
  color: #eeeeee;
  text-align: left;
  margin: 0;
  font-size: 2rem;
  font-family: "Gilroy-Light";
  font-weight: normal;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const RoomSectionParagraph = styled(Paragraph)`
  color: #3a6e49;
  margin: 2rem 0;
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const BoldParagraph = styled(Paragraph)`
  font-family: "Gilroy";
  font-weight: bold;
`;

export const ColumnedSection = styled(RowSection)`
  background-color: #eeeeee;
  text-align: left;
  padding: 2rem 1rem;
`;

export const ColumnSection = styled.div`
  flex: 50%;
`;

export const BulletedList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #eeeeee;
  padding: 0;
  gap: 1rem;

  ${({ color }) =>
    color &&
    `
        color: ${color};
    `};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BulletedIem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  line-height: 120%;

  &::before {
    content: "•";
    font-size: 13rem;
    margin-right: 10px;
  }

  @media (max-width: 1024px) {
    font-size: 1.5rem;

    &::before {
      font-size: 6rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    width: 100%;
  }
`;

export const SectionBulletHeader = styled(BulletedIem)`
  font-family: "Gilroy";
  font-weight: bold;
  font-size: 3rem;

  &::before {
    font-size: 8rem;
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }

  @media (max-width: 390px) {
    font-size: 2rem;

    &::before {
      font-size: 5rem;
      margin-right: 15px;
    }
  }
`;

export const RoomsSectionBulletItem = styled(BulletedIem)`
  font-size: 2.5rem;

  &::before {
    font-size: 12rem;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;

    &::before {
      font-size: 8rem;
      margin-right: 5px;
    }
  }
`;

export const RightPhoto = styled.img`
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const BorderLine = styled.hr`
  border: 1px solid;
  color: #3a6e49;
  margin: 1rem 0 2rem;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RoomsContainer = styled.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ImagesSlider = styled.div`
  display: flex;
  gap: 5rem;
`;

export const SliderImage = styled.img`
  flex: 1;
  width: 0;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  background-color: #98c18e;
  padding: 20px 40px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 50px;
  border-width: 0;
  cursor: pointer;
  margin-top: 3rem;
  font-family: Gilroy-Light;

  @media (max-width: 1440px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 15px 20px;
  }

  &:hover {
    color: #ffffff;
  }
`;

export const BottomSection = styled.div`
  background-color: #98c18e;
  width: 100%;
  border-top: 2px solid #3a6e49;
`;

export const BottomParagraph = styled(Paragraph)`
  text-align: center;
  padding: 4rem 0;
  font-family: "Gilroy";
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
