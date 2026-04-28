import { useState } from "react";
import icondropdown from "../assets/images/icon-dropdown.svg";
import "../index.css";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function DaySelect({ value, setValue }) {
  const [open, setOpen] = useState(false);

  const selectedLabel = days[value];

  return (
    <div className="custom-select">
      <div className="selected" onClick={() => setOpen(!open)}>
        {selectedLabel} {"  "} <img src={icondropdown} alt="Dropdown" />
      </div>

      {open && (
        <div className="options">
          {days.map((day, index) => (
            <div
              key={index}
              className="option"
              onClick={() => {
                setValue(index);
                setOpen(false);
              }}
            >
              {day}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
