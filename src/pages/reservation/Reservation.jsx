import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import DateInput from "../../components/DateInput/DateInput.jsx";
import TimeInput from "../../components/TimeInput/TimeInput.jsx";

import axios from "../../api/axios.js";

import {
  Container,
  VerificationSuccessContainer,
  FormContainer,
  FormHeader,
  Form,
  InputContainer,
  MultiInputContainer,
  InputField,
  SelectField,
  DatepickerWrapper,
  TextAreaField,
  SubmitButton,
  Spinner,
} from "./styles.js";

export const ReservationVerificationRedirect = () => {
  const { verifyKey } = useParams();

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios.put("/reservation/verify/" + verifyKey).then(() => setSuccess(true));
  }, []);

  return (
    <VerificationSuccessContainer>
      {success ? <h1>Reserved successfully!</h1> : <></>}
    </VerificationSuccessContainer>
  );
};

const Reservation = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const [room, setRoom] = useState("");
  const [date, setDate] = useState(undefined);
  const [startHours, setStartHours] = useState(undefined);

  const [lockedDateTimes, setLockedDateTimes] = useState(null);
  const [startLockedTimes, setStartLockedTimes] = useState([]);
  const [endLockedTimes, setEndLockedTimes] = useState([]);

  const [sending, setSending] = useState(false);

  useEffect(() => {
    axios
      .get("/reservation/all")
      .then((response) => setLockedDateTimes(response.data))
      .catch(() =>
        toast.error("Could not fetch reservations. Try later", {
          position: "top-center",
          className: "toast-message",
        })
      );
  }, []);

  useEffect(() => {
    reset({
      ...getValues(),
      date: undefined,
    });
  }, [room]);

  useEffect(() => {
    reset({
      ...getValues(),
      startHours: undefined,
      endHours: undefined,
    });

    if (date && lockedDateTimes != null) {
      const filteredDateTimes = lockedDateTimes[room].lockedTimes.filter(
        (d) => {
          const da = new Date(d.date);

          return (
            date.getFullYear() === da.getFullYear() &&
            date.getMonth() === da.getMonth() &&
            date.getDate() === da.getDate()
          );
        }
      );

      const startTimes = [];

      const currentDate = new Date();
      if (
        currentDate.getFullYear() === date.getFullYear() &&
        currentDate.getMonth() === date.getMonth() &&
        currentDate.getDate() === date.getDate()
      ) {
        for (let i = 0; i <= currentDate.getHours(); i++) {
          startTimes.push(i);
        }
      }

      for (let i = 0; i < filteredDateTimes.length; i++) {
        const date = filteredDateTimes[i];

        for (let i = date.startHours; i < date.endHours; i++) {
          startTimes.push(i);
        }
      }

      setStartLockedTimes(startTimes);
    }
  }, [date]);

  useEffect(() => {
    reset({
      ...getValues(),
      endHours: undefined,
    });

    if (startHours && lockedDateTimes != null) {
      const endTimes = [];

      const currentDate = new Date();
      if (
        currentDate.getFullYear() === date.getFullYear() &&
        currentDate.getMonth() === date.getMonth() &&
        currentDate.getDate() === date.getDate()
      ) {
        for (let i = 0; i <= currentDate.getHours(); i++) {
          endTimes.push(i);
        }
      }

      for (let i = 0; i <= startHours.getHours(); i++) {
        endTimes.push(i);
      }

      const filteredDateTimes = lockedDateTimes[room].lockedTimes.filter(
        (d) => {
          const da = new Date(d.date);

          return (
            date.getFullYear() === da.getFullYear() &&
            date.getMonth() === da.getMonth() &&
            date.getDate() === da.getDate()
          );
        }
      );

      for (let i = 0; i < filteredDateTimes.length; i++) {
        const date = filteredDateTimes[i];

        if (date.startHours > startHours.getHours()) {
          for (let i = date.startHours + 1; i < 24; i++) {
            endTimes.push(i);
          }
          break;
        }
      }

      setEndLockedTimes(endTimes);
    }
  }, [startHours]);

  const sendData = async (formData) => {
    const date = new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(formData.date);

    formData.date = date;
    formData.startHours = formData.startHours.getHours();
    formData.endHours = formData.endHours.getHours();
    formData.room = formData.room.toUpperCase();

    setSending(true);

    try {
      await axios.post("/reservation", formData).then(() => setSending(false));

      toast.success("Reserved", {
        position: "top-center",
        className: "toast-message",
      });
    } catch (error) {
      toast.error(error.response.data.messageDescription, {
        position: "top-center",
        className: "toast-message",
      });
    } finally {
      axios.get("/reservation/all").then((response) => {
        setLockedDateTimes(response.data);
        reset({ room: "" });
        setRoom("");
        setSending(false);
      });
    }
  };

  return (
    <Container>
      <FormContainer>
        <FormHeader>Rezervišite sobu</FormHeader>

        <Form onSubmit={handleSubmit((data) => sendData(data))}>
          <MultiInputContainer>
            <InputField
              {...register("firstName", { required: true })}
              type="text"
              id="first-name"
              placeholder="Ime *"
              error={errors.firstName != null}
            />
            <InputField
              {...register("lastName", { required: true })}
              type="text"
              id="last-name"
              placeholder="Prezime *"
              error={errors.lastName != null}
            />
          </MultiInputContainer>

          <MultiInputContainer>
            <InputField
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="E-pošta *"
              error={errors.email != null}
            />
            <InputField
              {...register("phone", { required: true })}
              type="tel"
              id="phone"
              placeholder="Telefon *"
              error={errors.phone != null}
            />
          </MultiInputContainer>

          <InputContainer>
            <SelectField
              {...register("room", { required: true })}
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              error={errors.room != null}
            >
              <option value="" disabled selected>
                Soba
              </option>
              <option value="small">Mala Soba</option>
              <option value="small_2">Mala Soba 2</option>
              <option value="medium">Srednja soba</option>
              <option value="large">Velika soba</option>
            </SelectField>
          </InputContainer>

          {lockedDateTimes != null &&
          room != undefined &&
          room != null &&
          room !== "" ? (
            <>
              <InputContainer>
                <DatepickerWrapper>
                  <Controller
                    control={control}
                    name="date"
                    rules={{ required: true }}
                    render={({ field }) => (
                      <DateInput
                        filterDates={lockedDateTimes[room].lockedFullyDays}
                        onChange={(date) => {
                          field.onChange(date);
                          setDate(date);
                        }}
                        selected={field.value}
                        error={errors.date}
                      />
                    )}
                  />
                </DatepickerWrapper>
              </InputContainer>

              {date != undefined && date != null ? (
                <MultiInputContainer>
                  <DatepickerWrapper>
                    <Controller
                      control={control}
                      name="startHours"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TimeInput
                          filterTimes={startLockedTimes}
                          isStart={true}
                          onChange={(time) => {
                            field.onChange(time);
                            setStartHours(time);
                          }}
                          selected={field.value}
                          error={errors.startHours}
                        />
                      )}
                    />
                  </DatepickerWrapper>
                  <DatepickerWrapper>
                    <Controller
                      control={control}
                      name="endHours"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TimeInput
                          filterTimes={endLockedTimes}
                          filterFrom={startHours}
                          isStart={false}
                          onChange={(time) => field.onChange(time)}
                          selected={field.value}
                          error={errors.endHours}
                        />
                      )}
                    />
                  </DatepickerWrapper>
                </MultiInputContainer>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}

          <TextAreaField
            {...register("message")}
            id="message"
            placeholder="Unesite svoju poruku..."
          />

          <SubmitButton type="submit" disabled={sending}>
            {sending ? <Spinner /> : <>Pošaljite upit</>}
          </SubmitButton>
        </Form>
        <ToastContainer />
      </FormContainer>
    </Container>
  );
};

export default Reservation;
