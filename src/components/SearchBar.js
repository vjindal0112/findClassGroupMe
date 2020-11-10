import React, { useState, onChange } from "react";
import styled from "styled-components";

const options = [
  { value: "AERO ST 1A - Liscombe", label: "aero st 1a - liscombe" },
  { value: "AERO ST 20A - Liscombe", label: "AERO ST 20A - Liscombe" },
  { value: "AERO ST 130A - Jones", label: "AERO ST 130A - Jones" },
  { value: "AERO ST 140A - Fowler", label: "AERO ST 140A - Fowler" },
  { value: "AF AMER 1 - Pierre", label: "AF AMER 1 - Pierre" },
];

const SelectDiv = styled.div`
  width: 300px;
  height: 120px;
  top: 10%;
  left: 40%;
  position: absolute;
  maxheight: 120px;
  overflow: scroll;
`;

const Bar = styled.div`
  top: 46%;
  position: center;
`;

const SelectBar = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <Bar>
        <input
          style={{
            width: "600px",
            height: "49px",
            fontSize: "18px",
            borderWidth: "2px",
            borderColor: "#05AFF0",
            paddingLeft: "12px",
          }}
          type="input"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </Bar>
      <SelectDiv>
        {options.map((obj, index) => (
          <>
            {obj.value.toLowerCase().includes(query.toLowerCase()) ? (
              <p>{obj.value}</p>
            ) : null}
          </>
        ))}
      </SelectDiv>
    </>
  );
};

export default SelectBar;
