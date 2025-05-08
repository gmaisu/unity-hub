import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
  border-radius: 10px;
`;

export const Track = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => `-${props.index * 100}%`});
`;

export const Slide = styled.div`
  min-width: 100%;
  user-select: none;
`;

export const SlideImage = styled.img`
  width: 100%;
  display: block;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
`;

export const ArrowLeft = styled(Arrow)`
  left: 10px;
`;

export const ArrowRight = styled(Arrow)`
  right: 10px;
`;
