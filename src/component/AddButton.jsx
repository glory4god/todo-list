import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";

const Root = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);

  background-color: ${({ isActive }) => (isActive ? "red" : "green")};

  transform: rotate(${({ isActive }) => (isActive ? 45 : 0)}deg);
  transition-property: background-color, color, transfrom;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;

  svg {
    width: 4rem;
    height: 4rem;
    color: white;
  }
`;

const AddButton = ({ isActive = false, ...props }) => {
  return (
    <Root isActive={isActive} {...props}>
      <AddIcon />
    </Root>
  );
};

export default AddButton;
