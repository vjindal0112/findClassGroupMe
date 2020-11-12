import React, { useState, onChange } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const options = [
  {name: "AERO ST 1A - Liscombe", link: "https://youtube.com"},
  {name: "AERO ST 20A - Liscombe", link: "https://youtube.com"},
  {name: "AERO ST 130A - Jones", link: "https://youtube.com"},
  {name: "AERO ST 140A - Fowler", link: "https://youtube.com"},
  {name: "AF AMER 1 - Pierre", link: "https://youtube.com"},
];

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
            fontSize: "18px",
            borderWidth: "2px",
            borderColor: "#05AFF0",
            padding: "12px",
          }}
          type="input"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </Bar>
      {options.map((obj, index) => (
        <>
          {obj.name.toLowerCase().includes(query.toLowerCase()) ? (
            <ListItem className={obj.name} classLink={obj.link} />
          ) : null}
        </>
      ))}
    </>
  );
};

export default SelectBar;
