import React, { useState, onChange } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const options = [
  { name: "AERO ST 1A - Liscombe", link: "https://youtube.com" },
  { name: "AERO ST 20A - Liscombe", link: "https://youtube.com" },
  { name: "AERO ST 130A - Jones", link: "https://youtube.com" },
  { name: "AERO ST 140A - Fowler", link: "https://youtube.com" },
  { name: "AF AMER 1 - Pierre", link: "https://youtube.com" },
];

const Input = styled.input`
  border: 1px solid #05aff0;
  font-size: 16px;
  padding: 12px;
  background-color: #fcfcfc;
  width: 40%;
  display: flex;
  margin: 0 auto;
  :focus {
    border-radius: 0px;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SelectBar = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <Input
        type="input"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {query != ""
        ? options.map((obj, index) => (
            <>
              {obj.name.toLowerCase().includes(query.toLowerCase()) ? (
                <ListItem className={obj.name} classLink={obj.link} />
              ) : null}
            </>
          ))
        : null}
      <br />
    </>
  );
};

export default SelectBar;
