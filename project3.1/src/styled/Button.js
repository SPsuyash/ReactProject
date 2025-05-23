import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: 1px solid transparent;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s background ease-in, 0.4s color ease-in, 0.4s border ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
`;
