import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const OuterDiv = styled.div`
  border: 1px solid #ddd;
  border-top-width: 0;
  background-color: #fcfcfc;
  color: #333;
  padding: 20px;
  width: 40%;
  margin: 0 auto;
  z-index: 3;
  display: block;
  transition: all 200ms;
  text-align: left;
  font-size: 16px;
  :hover {
    background-color: #efefff;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Overlay = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default function ListItem({ className, classLink }) {
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
        {/* <span style={{ fontWeight: "bold" }}> */}
          {className}
        {/* </span> */}
      </OuterDiv>
    </>
  );
}
