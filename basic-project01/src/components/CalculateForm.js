import { useState } from "react";
import { CalculateBtn } from "./CalculateBtn";
import "./CalculateForm.css";

export const CalculateForm = (props) => {
  const [currentInput, setCurrentInput] = useState("");
  const [yearlyInput, setYearlyInput] = useState("");
  const [expectInput, setExpectInput] = useState("");
  const [durationInput, setDurationInput] = useState("");

  const currentHandler = (e) => {
    setCurrentInput(e.target.value);
  };

  const yearlyHandler = (e) => {
    setYearlyInput(e.target.value);
  };

  const expectHandler = (e) => {
    setExpectInput(e.target.value);
  };

  const durationHandler = (e) => {
    setDurationInput(e.target.value);
  };

  const submitObject = {
    current: currentInput,
    yearly: yearlyInput,
    expect: expectInput,
    duration: durationInput,
  };

  const submitHandler = (e) => {
    e.preventDefault();

    props.calculateData(submitObject);

    setCurrentInput("");
    setYearlyInput("");
    setExpectInput("");
    setDurationInput("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentHandler}
            value={currentInput}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlyHandler}
            value={yearlyInput}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectHandler}
            value={expectInput}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={durationHandler}
            value={durationInput}
          />
        </p>
      </div>
      <CalculateBtn />
    </form>
  );
};
