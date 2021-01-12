import React from "react";
import "../App.css";
import { Heading, Button, Logo, Header } from "../components/styles";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import Helm from "../components/Helm";
import ReactGA from "react-ga";

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
      <Helm title="Thanks" />
      <Header>
        <div>
          <a>
            <Link
              onClick={(e) =>
                ReactGA.event({
                  category: "Header",
                  action: "Click",
                  label: "Change link",
                })
              }
              to="/submit"
            >
              Change a <span>GroupMe</span> Link
            </Link>
          </a>
          &nbsp; | &nbsp;{" "}
          <a href="https://umichstudybuddies.com" target="_blank">
            Find a Study Group
          </a>
        </div>
      </Header>
      <Link to="/">
        <Logo src="./StudyBuddyLogo.png" />
      </Link>
      <Heading>Thanks for submitting</Heading>
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
