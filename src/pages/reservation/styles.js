import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  align-content: space-around;
  gap: 3rem;
  background-color: #3a6e49;
  padding: 15rem 0 5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }

  @media (max-width: 480px) {
    padding: 10rem 0 5rem 0;
  }
`;

export const VerificationSuccessContainer = styled(Container)`
  background-color: inherit;
`;

export const FormContainer = styled.div`
  background-color: #98c18eb3;
  border-radius: 100rem;
  padding: 4rem 20rem;

  @media (max-width: 1360px) {
    border-radius: 30rem;
    padding: 15rem;
  }

  @media (max-width: 1024px) {
    border-radius: 20rem;
    padding: 10rem;
  }

  @media (max-width: 768px) {
    border-radius: 10rem;
    padding: 7rem;
  }

  @media (max-width: 480px) {
    border-radius: 5rem;
    padding: 5rem 1rem;
    width: 90%;
  }
`;

export const FormHeader = styled.p`
  color: #eeeeee;
  text-align: center;
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

export const Form = styled.form`
  margin-top: 60px;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const MultiInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DatepickerWrapper = styled.div`
  position: relative;

  .react-datepicker-wrapper {
    width: 100% !important;
  }
`;

export const SelectField = styled.select`
  appearance: none;
  border-radius: 30px;
  text-align: center;
  box-sizing: border-box;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  border: 1px solid ${(props) => (props.error ? "#af3030c9" : "#636363")};
  background-color: #98c18e00;
  font-family: "Gilroy-Light", lighter;

  background-image: url("https://terapijskiprostor.com/images/down-arrow.svg");
  background-repeat: no-repeat;
  background-position: right 1.8rem center;
  background-size: 20px;
`;

export const InputField = styled.input`
  padding: 1rem;
  font-size: 1.2rem;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 1.2rem;
  background-color: #98c18e00;
  border: none;
  border-bottom: 1px solid ${(props) => (props.error ? "#af3030c9" : "#636363")};
  font-family: "Gilroy-Light", lighter;

  &::placeholder {
    color: #090909;
    opacity: 1;
  }
`;

export const TextAreaField = styled.textarea`
  padding: 1rem;
  font-size: 1.2rem;
  background-color: #98c18e00;
  border: none;
  border-bottom: 1px solid #636363;
  width: 100%;
  resize: none;
  height: 150px;
  box-sizing: border-box;
  margin-bottom: 1.5rem;
  font-family: "Gilroy-Light", lighter;

  &::placeholder {
    color: #090909;
    opacity: 1;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  border: 1px solid;
  cursor: pointer;
  background-color: #98c18e00;
  border-radius: 30px;
  font-family: "Gilroy-Light", lighter;

  &:hover {
    color: #ffffff;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #3a6e49;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
`;
