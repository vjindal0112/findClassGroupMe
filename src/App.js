import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import styled from "styled-components";
import { BLUE } from "./constants";
import { Row, Col } from "./components/styles";
import SelectBar from "./components/SelectBar";
import ListItem from "./components/ListItem";
import Header from "./components/Header";
import ReactGA from "react-ga";
import { initAmplitude } from "./amplitude";
import { WaveTop, Heading, Button } from "./components/styles";
import { useHistory } from "react-router-dom";

initAmplitude();
ReactGA.initialize("UA-176116817-5");
ReactGA.pageview(window.location.pathname + window.location.search);

const BulletPoints = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  font-size: 25px;
  font-weight: 500;
  color: white;
  flex-shrink: 0;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 18px;
    height: 32px;
    width: 32px;
    margin-left: 10%;
    line-height: 24px;
  }
  @media (max-width: 280px) {
    height: 24px;
    width: 24px;
    font-size: 16px;
    margin-left: 10px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  margin-left: 10px;
`;

const OuterFlex = styled.div`
  max-width: 18em;
  display: flex;
  flex-direction: column;
  margin: 12px auto 24px auto;
  padding: 20px;
  @media (min-width: 550px) {
    padding-left: 50px;
  }
  @media (min-width: 280px) {
    padding-left: 0px;
  }
`;

const BulletText = styled.div`
  margin-left: 20px;
  font-size: 16px;
  color: black;
  display: flex;
  text-align: left;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 22px;
  }
`;

const Button2 = styled.a`
  :hover {
    color: #fcfcfc;
    background-color: ${BLUE};
  }
  padding: 16px;
  margin: 24px auto;
  margin-top: 12px;
  border: 3px solid ${BLUE};
  transition: 300ms all;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const LabelMini = styled.div`
  font-size: 12px;
  display: inline-flex;
  margin: 4px auto;
  margin-top: 12px;

`

function App() {
  let history = useHistory();

  return (
    <div className="App">
      <Header />
      <WaveTop src="/waveTop.svg" />
      <Heading>
        FindMyClass<span style={{ color: BLUE }}>Group.Me</span>
      </Heading>
      <OuterFlex>
        <Flex>
          <BulletPoints bgColor={BLUE}>1</BulletPoints>
          <BulletText>
            <span style={{ fontWeight: "bold" }}>Type</span>&nbsp;to search
          </BulletText>
        </Flex>
        <br />
        <Flex>
          <BulletPoints bgColor={BLUE}>2</BulletPoints>
          <BulletText>Click on your class</BulletText>
        </Flex>
        <br />
        <Flex>
          <BulletPoints bgColor={BLUE}>3</BulletPoints>
          <BulletText>Chat in your GroupMe</BulletText>
        </Flex>
      </OuterFlex>
      <SelectBar />
      <LabelMini>Don't see what you're looking for?</LabelMini><br/>
      <Button2
        onClick={() => {
          history.push("/submit");
        }}
      >
        Add a GroupMe
      </Button2>
    </div>
  );
}

export default App;
