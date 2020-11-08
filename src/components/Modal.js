import React from "react";
import styled from "styled-components";

const ModalDiv = styled.div`
  border-radius: 8px;
  background-color: #fafafa;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  width: 300px;
  height: 300px;
  text-align: center;
  padding: 20px;
`;

const Button = styled.div`
  background: #05aff0;
  border-radius: 8px;
  padding: 20px;
`;

const Modal = (noGroupMe, className, classLink) => {
  return (
    <ModalDiv>
      Test
      <Button>Join GroupMe</Button>
    </ModalDiv>
  );
};

export default Modal;
