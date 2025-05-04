import styled from "styled-components";

export const Slider = styled.div`
  overflow: hidden;
  margin: 50px auto;
  touch-action: pan-y;
`;

export const Slides = styled.div`
  display: flex;
  gap: 3rem;
  transition: transform 0.3s ease;
`;

export const Slide = styled.img`
  width: 90%;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
`;
