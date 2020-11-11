import React, { useState } from "react";
import styled from "styled-components";
import { BLUE } from "../constants";
import { Row, Col } from "./styles"

const ModalDiv = styled.div`
  border-radius: 8px;
  background-color: #fafafa;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  min-width: 300px;
  @media (max-width: 321px) {
    min-width: 240px;
  }
`;

const Button = styled.div`
  background: #05aff0;
  border-radius: 8px;
  padding: 20px;
  color: #fafafa;
  font-weight: bold;
`;

const Checkmark = styled.img`
  height: 16px;
`;

const CheckmarkBox = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 4px;
  border: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms;
`;

const CloseOut = styled.img`
  height: 20px;
  width: 20px;
  position: absolute;
  right: 20px;
  top: 16px;
  opacity: 0.6;
  transition: all 300ms;
  :hover {
    opacity: 1;
  }

`

const Modal = ({ noGroupMe, className, classLink, setClicked }) => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  return (
    <ModalDiv>
      <CloseOut onClick={() => setClicked(false)} src="/x.png" />
      <Row style={{marginTop: "24px"}}>
        <Col md={1} sm={1} xs={1}>
          <CheckmarkBox
            style={{
              backgroundColor: check1 ? BLUE : "#f5f5f5",
            }}
            onClick={() => {
              setCheck1((check1) => !check1);
            }}
          >
            <Checkmark src="/checkmark.png" />
          </CheckmarkBox>
        </Col>
        <Col md={11} sm={11} xs={11}>
          I am a student at the University of Michigan
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md={1} sm={1} xs={1}>
          <CheckmarkBox
            style={{
              backgroundColor: check2 ? BLUE : "#f5f5f5",
            }}
            onClick={() => {
              setCheck2((check2) => !check2);
            }}
          >
            <Checkmark src="/checkmark.png" />
          </CheckmarkBox>
        </Col>
        <Col xs={11} sm={11} md={11}>
          I am a student in this class, and will be kicked if not
        </Col>
      </Row>

      <br />
      <br />
      <Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          {className}
        </div>
      </Row>

      <br />
      <br />
      {noGroupMe ? (
        <>
          <Row>
            <Col style={{ width: "100%", fontSize: "12px" }}>
              This class did not previously have an established GroupMe
            </Col>
          </Row>
          <br />
        </>
      ) : null}

      <Button
        onClick={(e) => {
          e.preventDefault();
          if (!check1 || !check2) {
            alert("Please check both boxes");
          } else {
            window.open(classLink, "_blank");
            setClicked(false);
          }
        }}
      >
        Join GroupMe
      </Button>
    </ModalDiv>
  );
};

export default Modal;
