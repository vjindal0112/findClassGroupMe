import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const Input = styled.input`
  border: 1px solid #05aff0;
  font-size: 16px;
  padding: 12px;
  background-color: #fcfcfc;
  width: 40%;
  display: flex;
  margin: 0 auto;
  :focus {
    border-radius: 0px;
  }
  @media (max-width: 768px) {
    width: 80%;
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
