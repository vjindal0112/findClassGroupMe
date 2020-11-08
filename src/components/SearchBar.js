import React, { useState, onChange } from "react";
import styled from "styled-components";
import SearchField from "react-search-field";

const options = [
  { value: "AERO ST 1A - Liscombe", label: "AERO ST 1A - Liscombe" },
  { value: "AERO ST 20A - Liscombe", label: "AERO ST 20A - Liscombe" },
  { value: "AERO ST 130A - Jones", label: "AERO ST 130A - Jones" },
  { value: "AERO ST 140A - Fowler", label: "AERO ST 140A - Fowler" },
  { value: "AF AMER 1 - Pierre", label: "AF AMER 1 - Pierre" },
];

const SelectDiv = styled.div`
  width: 300px;
  height: 300px;
  top: 50%;
  left: 40%;
  position: absolute;
`;

const SelectBar = () => {
  const [query, setQuery] = useState("");

  const updateSearch = (search) => {
    setQuery(search);
  };

  return (
    <>
      <SearchField
        placeholder="Search..."
        onChange={(str) => updateSearch(str)}
        searchText="This is initial search text"
        classNames="test-class"
      />
      {options.map((obj, index) => (
        <>{obj.value.includes(query) ? <p>{obj.value}</p> : null}</>
      ))}
    </>
  );
};

export default SelectBar;
