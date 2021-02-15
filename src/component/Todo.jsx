import React from "react";
import styled from "styled-components";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: ${({ done }) => (done ? 0.3 : 1)};

  .left {
    display: flex;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    align-self: center;
  }
  .content {
    font-size: 1.5rem;
    color: ${({ done }) => (done ? " gray" : "initial")};
    text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  }
  .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: rgb(218, 255, 222);
    border: ${({ done }) =>
      done ? "0.1px solid rgb(159, 159, 159)" : "0.1px solid #78d178"};
    cursor: pointer;
  }
  .right {
    display: flex;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;

    cursor: pointer;
  }
`;

const Todo = ({ content, done = false, setDone, setDelete, ...props }) => {
  return (
    <Root done={done} {...props}>
      <div className="left">
        <div className="icon-box" onClick={() => setDone()}>
          {done && <DoneIcon />}
        </div>
        <span className=" content">{content}</span>
      </div>
      <div className="right" onClick={() => setDelete()}>
        {<DeleteIcon />}
      </div>
    </Root>
  );
};

export default React.memo(Todo);
