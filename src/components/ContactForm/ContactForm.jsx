import React from "react";
import { useForm } from "react-hook-form";

import axios from 'axios';

import {
  FormContainer,
  FormTitle,
  FormDescription,
  Form,
  InputContainer,
  InputField,
  TextAreaField,
  SubmitButton,
} from "./styles";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const sendData = async (formData) => {  
    try {
      const response = await axios.post('https://terapijskiprostor.com/api/contact/submit', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Onlajn upit</FormTitle>
      <FormDescription>
        Slobodno stupite u kontakt u bilo koje vrijeme. Radujemo se što ćemo vas
        podržati.
      </FormDescription>

      <Form onSubmit={handleSubmit((data) => sendData(JSON.stringify(data)))}>
        <InputContainer>
          <InputField
            {...register("firstName")}
            type="text"
            id="first-name"
            placeholder="Prezime *"
            required
          />
          <InputField
            {...register("lastName")}
            type="text"
            id="last-name"
            placeholder="Prezime *"
            required
          />
        </InputContainer>

        <InputContainer>
          <InputField
            {...register("email")}
            type="email"
            id="email"
            placeholder="E-pošta *"
            required
          />
          <InputField
            {...register("phone")}
            type="tel"
            id="phone"
            placeholder="Telefon *"
            required
          />
        </InputContainer>

        <TextAreaField
          {...register("message")}
          id="message"
          placeholder="Unesite svoju poruku..."
        />

        <SubmitButton type="submit">Prosleđivanje</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
