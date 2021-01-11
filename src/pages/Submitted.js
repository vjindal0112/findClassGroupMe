import React from "react";
import "../App.css";
import { Heading, Button, Logo, Header } from "../components/styles";
import { BLUE } from "../constants";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Helm from '../components/Helm';

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
      <Helm title="Thanks"/>
      <Header>
        <div>
          <a href="/submit">
            Change a <span>GroupMe</span> Link
          </a>
          &nbsp; | &nbsp; <a href="https://umichstudybuddies.com" target="_blank">Find a Study Group</a>
        </div>
      </Header>
      {/* <WaveTop src="/waveTop.svg" /> */}
      <a href="/"><Logo src="./StudyBuddyLogo.png" /></a>
      <Heading>
        Thanks for submitting
      </Heading>
      <br />
      <Label>
        The GroupMe link will help people find others to talk to. It should be
        on the site within an hour!
      </Label>
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        Find more chats
      </Button>
    </div>
  );
}
