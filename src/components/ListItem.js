import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const OuterDiv = styled.div`
  border: 1px solid #ccc;
  background-color: #fcfcfc;
  color: #333;
  padding: 20px;
  max-width: 30em;
  margin: 0 auto;
  z-index: 3;
  display: block;
  :hover {
    background-color: #efefef;
  }
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default function ListItem({ className, profName, classLink }) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      {clicked ? (
        <>
          <Overlay>
            <Modal
              className={className}
              classLink={classLink}
              setClicked={setClicked}
            />
          </Overlay>
        </>
      ) : null}
      <OuterDiv
        onClick={() => {
          setClicked((clicked) => !clicked);
        }}
      >
        <span style={{ fontWeight: "bold" }}>
          {className} {profName ? ` - ${profName}` : null}
        </span>
      </OuterDiv>
    </>
  );
}
