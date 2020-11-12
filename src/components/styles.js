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
