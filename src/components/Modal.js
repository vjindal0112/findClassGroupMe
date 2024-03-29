import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BLUE, DULL_BLUE } from "../constants";
import { Row, Col } from "./styles";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const ModalDiv = styled.div`
  border-radius: 8px;
  background-color: #fff;
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
  background: ${(props) => (props.verified ? BLUE : DULL_BLUE)};
  border-radius: 8px;
  padding: 20px;
  color: #fafafa;
  font-weight: bold;
`;

// const Checkmark = styled.img`
//   height: 16px;
// `;

// const CheckmarkBox = styled.div`
//   height: 24px;
//   width: 24px;
//   border-radius: 4px;
//   border: 1px solid #333;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 300ms;
// `;

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

const DInput = styled.input`
  border: 2px solid ${BLUE};
  font-size: 16px;
  padding: 8px 12px;
  background-color: #fff;
  width: 40%;
  display: flex;
  margin: 0 auto;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  outline: none;
  :focus {
    border-radius: 0px;
  }
  @media (max-width: 768px) {
    width: 80%;
    padding: 12px;
  }
`;

const Modal = ({ noGroupMe, className, setClicked }) => {
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const spamWords = [
    "a",
    "test",
    "spam",
    "shit",
    "fuck",
    "bitch",
    "cock",
    "cunt",
    "dick",
    "faggot",
    "ass",
    "titty",
    "titties",
  ];
  const specialChars = ["!", "*", "&", "^", "$", "#"];
  let url = useLocation();

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"));
    }
  }, []);

  function pushEmailToSheets() {
    var formData = new FormData();

    let tempEmail = email.trim();
    let before = tempEmail.substr(0, tempEmail.indexOf("@"));

    let spam = false;
    spamWords.map((word, index) => {
      if (before === word) {
        spam = true;
      }
    });

    specialChars.map((char, index) => {
      if (tempEmail.includes(char)) {
        spam = true;
      }
    });

    if (tempEmail.split("@").length - 1 > 1) {
      spam = true;
    }

    if (
      !(tempEmail.toLowerCase().slice(tempEmail.length - 10) === "@umich.edu") ||
      before.includes(" ") ||
      spam ||
      before.length <= 1
    ) {
      return false;
    } else {
      formData.append("email", tempEmail.toLowerCase().trim());
      formData.append("className", className);
      if (url.search !== "") {
        formData.append("ref", url.search.substr(5));
      }
    }
    localStorage.setItem("email", email);
    fetch(
      "https://script.google.com/macros/s/AKfycbz4a0eRlOFubwveQopK2wYix4O95rcoQeH3GEFXk_EOFHmfYT39JJ0WcQ/exec",
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
      {emailSent ? (
        <Row ><div style={{"padding": "4px", "maxWidth": "200px", "margin": "12px auto", "marginTop": "12px", "lineHeight": "1.4"}}>Check your email in a few minutes for the link!</div></Row>
      ) : (
        <>
          <Row style={{ marginTop: "12px" }}>
            <Col
              md={1}
              sm={1}
              xs={1}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              Verify you are a student
            </Col>
            <Col md={11} sm={11} xs={11} style={{ marginTop: "10px" }}>
              <DInput
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

          <Row>
            <ReCAPTCHA
              sitekey="6Le_wDkaAAAAAOkt9YLOXveWvH46haqU854YxA20"
              onChange={(value) => {
                if (value == null) {
                  setVerified(false);
                } else {
                  setVerified(true);
                }
              }}
            />
            <br />
          </Row>

          <Button
            verified={verified}
            onClick={(e) => {
              e.preventDefault();
              if (verified) {
                if (pushEmailToSheets()) {
                  let data = {
                    email: email,
                    className: className,
                  };
                  fetch(
                    "https://4frmru2ivb.execute-api.us-east-1.amazonaws.com/default/sendChatEmailHook",
                    {
                      method: "POST",
                      body: JSON.stringify(data), // body data type must match "Content-Type" header
                    }
                  );
                  ReactGA.event({
                    category: "Join",
                    action: "Click",
                    label: className,
                  });
                  setEmailSent(true);
                } else {
                  alert("The email you have entered is not verified");
                }
              } else {
                alert("Please prove that you are not a robot");
              }
            }}
          >
            Join GroupMe
          </Button>
        </>
      )}
    </ModalDiv>
  );
};

export default Modal;
