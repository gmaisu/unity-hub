import styled from "styled-components";

export const FormContainer = styled.div`
    background-color: #b2ceab;
    flex: 1;
    text-align: left;
    padding: 2rem 3rem;
`;

export const FormTitle = styled.h2`
    font-size: 1.8rem;
    color: #333;
    font-weight: bold;
`;

export const FormDescription = styled.p`
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 2rem;
    width: 70%;
`;

export const Form = styled.form`
    margin-bottom: 1rem;
`;

export const InputContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const InputField = styled.input`
    padding: 0.8rem;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1.2rem;
    background-color: #b2ceab;
    border: none;
    border-bottom: 1px solid #636363;
    font-family: "Gilroy-Light", lighter;
`;

export const TextAreaField = styled.textarea`
    padding: 0.8rem;
    font-size: 1rem;
    background-color: #b2ceab;
    border: none;
    border-bottom: 1px solid #636363;
    width: 100%;
    resize: none;
    height: 100px;
    box-sizing: border-box;
    margin-bottom: 1.5rem;
    font-family: "Gilroy-Light", lighter;
`;

export const SubmitButton = styled.button`
    font-size: 1.2rem;
    padding: 1rem 2rem;
    border: 1px solid;
    cursor: pointer;
    background-color: #b2ceab;
    border-radius: 30px;
    font-family: "Gilroy-Light", lighter;
`;
