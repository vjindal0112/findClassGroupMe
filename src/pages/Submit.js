import React from "react";
import "../App.css";
import { WaveTop, Input, Heading } from "../components/styles";
import { BLUE } from "../constants";

export default function Submit() {
  return (
    <div className="App">
      <WaveTop src="/waveTop.svg" />
      <Heading>
        Submit a <span style={{ color: BLUE }}>GroupMe</span> Link
      </Heading>
      <Input placeholder="Email" />
      <Input placeholder="GroupMe Link" />
      <Input placeholder="ClassName" />
    </div>
  );
}
