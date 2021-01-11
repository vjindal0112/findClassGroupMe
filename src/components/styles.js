import styled from "styled-components";
import { GMBLUE, BLUE, YELLOW } from "../constants";

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
  border: 2px solid ${BLUE};
  font-size: 16px;
  padding: 12px;
  background-color: #fff;
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
  font-size: 54px;
  font-weight: bold;
  color: #333;
  /* padding-top: 12%; */

  @media (max-width: 1025px) {
    font-size: 48px;
    /* padding-top: 16%; */
  }

  @media (max-width: 768px) {
    font-size: 28px;
    /* padding-top: 28%; */
  }

  @media (max-width: 320px) {
    margin-left: 10px;
    font-size: 24px;
    /* padding-top: 40%; */
  }

  @media (max-width: 281px) {
    margin-left: 10px;
  }
`;

export const Button = styled.a`
  :hover {
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  padding: 16px;
  margin: 24px auto;
  border: 3px solid ${BLUE};
  background-color: ${BLUE};
  color: #fff;
  transition: 300ms all;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
  height: 10vh;

  @media (min-width: 1050px) {
    height: 10vh;
  }

  @media (max-width: 1050px) {
    height: 6vh;
  }

  @media (max-width: 800px) {
    height: 8vh;
  }

  @media (max-width: 700px) {
    height: 10vh;
  }

  background-color: ${BLUE};
  width: 100%;
  color: #fff;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-weight: bold;

  div {
    padding-top: 24px;
    width: 100%;
    text-align: center;

    @media (min-height: 1023px) {
      font-size: 22px;
      padding-top: 30px;
    }

    @media (max-width: 421px) {
      font-size: 16px;
      padding-top: 24px;
    }

    @media (max-width: 376px) {
      font-size: 16px;
      padding-top: 24px;
    }

    @media (min-height: 811px) and (max-width: 376px) {
      font-size: 16px;
      padding-top: 28px;
    }

    @media (max-width: 321px) and (min-height: 567px) {
      font-size: 14px;
      padding-top: 22px;
    }

    @media (max-width: 300px) {
      font-size: 14px;
      padding-top: 24px;
    }

    @media (max-width: 281px) {
      font-size: 14px;
    }

    span {
      /* reduce width for smaller phones */
      display: default;
      @media (max-width: 400px) {
        display: none;
      }
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    /* background: linear-gradient(to right, #fda085 0%, #f6d365 51%, #f6d365 100%); */
    transition: 0.25s ease-out;
    :visited {
      color: #fff;
    }
    :hover {
      transition: 0.5s;
      color: ${YELLOW};
    }
  }
`;

export const Logo = styled.img`
  max-height: 16vh;
  margin-bottom: 16px;
  margin-top: 20px;
`;
