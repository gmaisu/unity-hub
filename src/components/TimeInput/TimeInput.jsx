import React, { forwardRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const TimeInputField = styled.button`
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

const TimeInput = (props) => {
  const time = props.selected;
  const filterTimes = props.filterTimes;

  const isLockedTime = (date) => !filterTimes.includes(date.getHours());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <TimeInputField
      error={props.error != null}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
      }}
      ref={ref}
    >
      {time == null ? (
        <>
          <span>
            {props.isStart
              ? "Odaberite vrijeme početka *"
              : "Odaberite vreme završetka *"}
          </span>
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
    </TimeInputField>
  ));

  return (
    <DatePicker
      {...props}
      filterTime={isLockedTime}
      customInput={<ExampleCustomInput />}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={60}
      dateFormat="HH:mm"
    />
  );
};

export default TimeInput;
