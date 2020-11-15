import React, { useState } from "react";
import styled from "styled-components";
import { BLUE } from "../constants";
import { Row, Col, Input } from "./styles";
import ReactGA from "react-ga";
import amplitude from "amplitude-js";
import { useLocation } from "react-router-dom";

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
    border-radius: 6px;
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
`;

const Modal = ({ noGroupMe, className, classLink, setClicked }) => {
  const [email, setEmail] = useState("");
  let url = useLocation();

  function pushEmailToSheets() {
    var formData = new FormData();

    if (!email.toLowerCase().includes("@umich.edu")) {
      return false;
    } else {
      formData.append("email", email.toLowerCase().trim());
      if (url.search != "") {
        formData.append("ref", url.search.substr(5));
      }
    }
    console.log(formData);
    fetch(
      "https://script.google.com/macros/s/AKfycbyNkoQg5Hr-dcJM4hOloxV_ilPCLrm02vKclEQrO96DJWPC3XIA/exec",
      { method: "POST", body: formData }
    );
    return true;
  }

  return (
    <ModalDiv>
      <CloseOut onClick={() => setClicked(false)} src="/x.png" />
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
      <Row style={{ marginTop: "24px" }}>
        <Col md={1} sm={1} xs={1}>
          Verify you are a student
        </Col>
        <Col md={11} sm={11} xs={11}>
          <Input
            style={{ boxShadow: "none", width: "100%" }}
            placeholder="UMich Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </Row>
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
          if (pushEmailToSheets()) {
            window.open(classLink, "_blank");
            ReactGA.event({
              category: "Join",
              action: "Click",
              label: className,
            });
            amplitude.getInstance().logEvent(className, {
              category: "Join",
              action: "Click",
            });
            setClicked(false);
          } else {
            alert("The email you have entered is not verified");
          }
        }}
      >
        Join GroupMe
      </Button>
    </ModalDiv>
  );
};

export default Modal;
