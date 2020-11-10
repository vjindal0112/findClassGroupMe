import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import styled from "styled-components";
import { BLUE } from "./constants";
import { Row, Col } from "./components/styles";
import SelectBar from "./components/SearchBar";
import ListItem from "./components/ListItem";

const Heading = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #333;
  margin: 20px;
  margin-top: 12%;

  @media (max-width: 1200px) {
    font-size: 40px;
    margin-top: 15%;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

`;

const BulletPoints = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  font-size: 25px;
  text-align: center;
  font-weight: 500;
  color: white;
  flex-shrink: 0;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  margin-left: 10px;
`;

const OuterFlex = styled.div`
  max-width: 30em;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  @media (min-width: 550px) {
    padding-left: 50px;
  }
`;

const BulletText = styled.div`
  margin-left: 20px;
  font-size: 24px;
  color: black;
  display: flex;
  text-align: left;
  justify-content: center;
  align-items: center;
`;

const WaveTop = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;
  min-width: 100%;
`

function App() {
  return (
    <div class="App">
      <WaveTop src="/waveTop.svg" />
      <Heading>
        FindMyClass<span style={{ color: BLUE }}>Group.Me</span>
      </Heading>
      <OuterFlex>
        <Flex>
          <BulletPoints bgColor={BLUE}>1</BulletPoints>
          <BulletText>Fill out a 60 second form</BulletText>
        </Flex>
        <br />
        <Flex>
          <BulletPoints bgColor={BLUE}>2</BulletPoints>
          <BulletText>Get your buddies Oct. 18</BulletText>
        </Flex>
        <br />
        <Flex>
          <BulletPoints bgColor={BLUE}>3</BulletPoints>
          <BulletText>Make your group chat!</BulletText>
        </Flex>
      </OuterFlex>
      {/* <Modal className="Math 215"/> */}
      {/* <SelectBar/> */}
      <ListItem className="Math 215" profName="Forman"/>
    </div>
  );
}

export default App;
