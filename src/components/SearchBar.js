import React, { useEffect } from "react";

import Select from "react-select";

const SelectBar = ({
  title,
  label,
  keyName,
  choices,
  moveSectionDown,
  onChange,
  initial,
  reset,
}) => {
  useEffect(() => {}, [keyName, choices, initial, reset]);

  return (
    <div className="section">
      <Select
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            moveSectionDown();
          }
        }}
        placeholder={label}
        key={reset ? `${keyName}_${reset}` : keyName}
        options={choices}
        inputValue={initial}
        onInputChange={(e) => {
          console.log("onInputChange");
          console.log(e);
          if (e !== "" && typeof e != "object") {
            onChange(keyName, e);
          } else if (initial && initial.length === 1 && typeof e != "object") {
            onChange(keyName, e);
          }
        }}
        onChange={(newValue, actionMeta) => {
          console.log("onInputChange");
          console.log(newValue);
          if (actionMeta.action === "select-option") {
            onChange(keyName, newValue.value);
          }
        }}
      />
    </div>
  );
};

export default SelectBar;
