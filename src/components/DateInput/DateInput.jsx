import React, { forwardRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateInputField = styled.button`
  display: flex;
  width: 100%;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: 1px solid ${(props) => (props.error ? "#af3030c9" : "#636363")};
  color: #090909;
  cursor: pointer;
  background-color: #98c18e00;
  border-radius: 30px;
  justify-content: flex-end;
  font-family: "Gilroy-Light", lighter;

  &:hover {
    color: #636363;
  }

  span {
    margin: 0 auto;
  }
`;

const DateInput = (props) => {
  const date = props.selected;
  const filterDates = props.filterDates;

  const isLockedDay = (date) => {
    const currentDate = new Date();

    let parsedDates = filterDates
      .map((d) => new Date(d))
      .filter((d) => {
        return (
          date.getFullYear() === d.getFullYear() &&
          date.getMonth() === d.getMonth() &&
          date.getDate() === d.getDate()
        );
      });

    let sameDate =
      currentDate.getFullYear() <= date.getFullYear() &&
      currentDate.getMonth() <= date.getMonth();

    if (currentDate.getMonth() === date.getMonth()) {
      sameDate = sameDate && currentDate.getDate() <= date.getDate();
    }

    return parsedDates.length == 0 && sameDate;
  };

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <DateInputField
      error={props.error != null}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
      }}
      ref={ref}
    >
      {date == null ? (
        <>
          <span>Izaberite datum *</span>
          <img
            src="https://terapijskiprostor.com/images/down-arrow.svg"
            width="20px"
          />
        </>
      ) : (
        <>
          <span>{value}</span>
          <img
            src="https://terapijskiprostor.com/images/down-arrow.svg"
            width="20px"
          />
        </>
      )}
    </DateInputField>
  ));

  return (
    <DatePicker
      {...props}
      filterDate={isLockedDay}
      customInput={<ExampleCustomInput />}
    />
  );
};

export default DateInput;
