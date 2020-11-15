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
import { initAmplitude } from './amplitude';

initAmplitude();


ReactGA.initialize("UA-176116817-5");
ReactGA.pageview(window.location.pathname + window.location.search);

const Heading = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #333;
  padding-top: 12%;

  @media (max-width: 1025px) {
    font-size: 48px;
    padding-top: 16%;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    padding-top: 28%;
  }

  @media (max-width: 320px) {
    margin-left: 10px;
    padding-top: 40%;
  }

  @media (max-width: 281px) {
    margin-left: 10px;
  }
`;

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

const WaveTop = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;
  min-width: 100%;
  @media (max-width: 768px) {
    width: 150%;
  }
`;

function App() {
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
          <BulletText>Search for your class</BulletText>
        </Flex>
        <br />
        <Flex>
          <BulletPoints bgColor={BLUE}>2</BulletPoints>
          <BulletText>Click on your class</BulletText>
        </Flex>
        <br />
        <Flex>
          <BulletPoints bgColor={BLUE}>3</BulletPoints>
          <BulletText>Chat!</BulletText>
        </Flex>
      </OuterFlex>
      <SelectBar />
    </div>
  );
}

export default App;
