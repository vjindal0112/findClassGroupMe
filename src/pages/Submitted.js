import React from "react";
import "../App.css";
import { WaveTop, Input, Heading, Button } from "../components/styles";
import { BLUE } from "../constants";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const Label = styled.div`
  margin-bottom: 8px;
  margin-top: 8px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  font-size: 18px;
  line-height: 1.5;
  @media (max-width: 768px) {
    width: 80%;
    font-size: 16px;
  }
`;

export default function Submitted() {

  let history = useHistory();

  return (
    <div className="App">
      <WaveTop src="/waveTop.svg" />
      <Heading>
        Thanks for submitting
      </Heading>
      <br />
      <Label>The GroupMe link will help people find others to talk to. It should be on the site within an hour!</Label>
      <Button onClick={() => {
        history.push("/");
      }}>
        Find more chats
      </Button>
    </div>
  );
}
