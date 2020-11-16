import React, { useState } from "react";
import "../App.css";
import { WaveTop, Input, Heading, Button } from "../components/styles";
import { BLUE } from "../constants";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 8px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default function Submit() {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [className, setClassName] = useState("");

  function pushEmailToSheets() {
    var formData = new FormData();

    if (!email.toLowerCase().includes("@umich.edu")) {
      alert("Please enter your UMich email");
      return false;
    } else if (link == "" || email == "" || className == "") {
      alert("Please fill out all fields");
      return false;
    } else {
      formData.append("email", email.toLowerCase().trim());
      formData.append("link", link.toLowerCase().trim());
      formData.append("className", className.toUpperCase().trim());
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbxFnhATTvxRVR7s6RNcyttBiaU9jlnz8A_1aYSAXd-ACSisW4YH/exec",
      { method: "POST", body: formData }
    );

    return true;
  }

  return (
    <div className="App">
      <WaveTop src="/waveTop.svg" />
      <Heading>
        Submit a <span style={{ color: BLUE }}>GroupMe</span> Link
      </Heading>
      <br />
      <br />
      <Label>GroupMe link</Label>
      <Input
        placeholder="GroupMe Link"
        onChange={(e) => setLink(e.target.value)}
      />
      <br />
      <Label>Class name</Label>
      <Input
        placeholder="Class Name"
        onChange={(e) => setClassName(e.target.value)}
      />
      <br/>
      <Label>Verify you are a student</Label>
      <Input
        placeholder="UMich Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        onClick={() => {
          if (pushEmailToSheets()) {
            history.push("/submitted");
          }
        }}
      >
        {" "}
        Submit
      </Button>
    </div>
  );
}
