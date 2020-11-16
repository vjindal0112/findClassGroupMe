import styled from "styled-components";
import { BLUE } from "../constants";

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px;
  margin-right: 4px;
  margin-left: 4px;
  justify-content: center;
  @media (max-width: 768px) {
    text-align: left;
    line-height: 24px;
  }
  @media (max-width: 321px) {
    text-align: left;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const WaveTop = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;
  min-width: 100%;
  @media (max-width: 768px) {
    width: 150%;
  }
  @media (max-width: 320px) {
    width: 200%;
  }
`;

export const Input = styled.input`
  border: 2px solid #05aff0;
  font-size: 16px;
  padding: 12px;
  background-color: #fcfcfc;
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

export const Heading = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #333;
  padding-top: 12%;

  @media (max-width: 1025px) {
    font-size: 48px;
    padding-top: 16%;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    padding-top: 28%;
  }

  @media (max-width: 320px) {
    margin-left: 10px;
    font-size: 24px;
    padding-top: 40%;
  }

  @media (max-width: 281px) {
    margin-left: 10px;
  }
`;

export const Button = styled.a`
  :hover {
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);
  }
  padding: 16px;
  margin: 24px auto;
  border: 3px solid ${BLUE};
  background-color: ${BLUE};
  color: #fcfcfc;
  transition: 300ms all;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
`;
