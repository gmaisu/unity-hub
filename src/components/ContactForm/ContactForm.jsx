import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";

import {
  FormContainer,
  FormTitle,
  FormDescription,
  Form,
  InputContainer,
  InputField,
  TextAreaField,
  SubmitButton,
  Spinner,
} from "./styles";

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const sendData = async (formData) => {
    setSending(true);

    try {
      await axios
        .post("https://terapijskiprostor.com/api/contact/submit", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          setSending(false);
          reset();
        });
    } catch (error) {
      setSending(false);
      toast.error("Error. Try Later", {
        position: "top-center",
        className: "toast-message",
      });
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

        <SubmitButton type="submit" disabled={sending}>
          {sending ? <Spinner /> : <>Prosleđivanje</>}
        </SubmitButton>
      </Form>
      <ToastContainer />
    </FormContainer>
  );
};

export default ContactForm;
