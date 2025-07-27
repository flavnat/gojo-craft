import { useState } from "react";

export function CheckboxGroup({ options = [], onChange }) {
  const [selectedValues, setSelectedValues] = useState([]);

  const toggle = (val) => {
    let updatedValues;
    if (selectedValues.includes(val)) {
      updatedValues = selectedValues.filter((v) => v !== val);
    } else {
      updatedValues = [...selectedValues, val];
    }

    setSelectedValues(updatedValues);
    if (onChange) onChange(updatedValues); // Optional callback to parent
  };

  return (
    <div className="space-y-2">
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center text-sm gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selectedValues.includes(opt.value)}
            onChange={() => toggle(opt.value)}
            className="accent-blue-500 w-4 h-4"
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
