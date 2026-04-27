import { useState } from "react";
import "./index.css";

const days = [
  "Ponedjeljak",
  "Utorak",
  "Srijeda",
  "Četvrtak",
  "Petak",
  "Subota",
  "Nedjelja",
];

export default function DaySelect({ value, setValue }) {
  const [open, setOpen] = useState(false);

  const selectedLabel = days[value];

  return (
    <div className="custom-select">
      <div className="selected" onClick={() => setOpen(!open)}>
        {selectedLabel}
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
