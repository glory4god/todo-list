import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import AddButton from "./component/AddButton";
import Input from "@material-ui/core/Input";
import Todo from "./component/Todo";

const Root = styled.div`
  background-color: whitesmoke;
  padding: 4rem 0;
  height: 100vh;
`;
const Container = styled(Paper)`
  position: relative;
  width: 500px;
  height: 700px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  border: 0.5px solid #78d178;

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }
  .sub-title {
    font-size: 1.25rem;
    margin: 0.75rem 0 2rem 0;
  }
  .point {
    color: green;
    font-weight: bold;
  }
  .divider {
    width: 100%;
    height: 1px;
    background-color: gray;
    margin: 1rem 0;
    opacity: 0.3;
  }
  .addbutton {
    position: absolute;
    bottom: 0px;
    right: 50%;
    transform: translate(50%, 50%);
  }
  .edit-table {
    position: absolute;
    width: 100%;
    height: 150px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(250, 243, 243, 0.87);
    padding-top: 2rem;
    border-top: 0.04rem solid #78d178;

    .MuiInputBase-input {
      background-color: white;
    }
  }
  .todo-listbox {
    width: 100%;
    height: 500px;
    background-color: rgb(232, 248, 255);
    border-radius: 1.5rem;
    overflow: auto;
  }
`;
const EditBox = styled(Input)`
  padding: 1rem 2rem 0 2rem;
`;

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState(false);
  const [addTodoText, setAddTodotext] = React.useState([]);

  const addTodo = React.useCallback((content, todos) => {
    setTodos([...todos, { content, done: false }]);
  }, []);

  const setDone = React.useCallback((index) => {
    setTodos((todos) =>
      todos.map((todo, idx) => {
        if (idx === index) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      })
    );
  }, []);

  const setDelete = React.useCallback((index) => {
    setTodos((todos) => todos.filter((_, idx) => idx !== index));
  }, []);

  return (
    <Root>
      <Container>
        <p className="title">{new Date().toLocaleDateString("ko-KR")}</p>
        <p className="sub-title">
          {new Date().toLocaleDateString("ko-KR", { weekday: "long" })}
        </p>
        <div className="point">할 일 {todos.length}개 남음</div>
        <div className="divider"></div>
        <div className="todo-listbox">
          {todos.map((todo, idx) => (
            <Todo
              key={`todo-${idx}`}
              content={todo.content}
              done={todo.done}
              setDone={() => setDone(idx)}
              setDelete={() => setDelete(idx)}
            />
          ))}
        </div>

        {edit && (
          <div className="edit-table">
            <EditBox
              fullWidth
              disableUnderline={true}
              autoFocus
              placeholder="할 일을 입력후 Enter키를 누르세요!"
              inputProps={{ "aria-label": "description" }}
              value={addTodoText}
              onChange={(e) => setAddTodotext(e.target.value)}
              onKeyDown={(e) => {
                if (edit && addTodoText) {
                  if (e.key === "Enter") {
                    addTodo(addTodoText, todos);
                    setEdit(false);
                    setAddTodotext("");
                  }
                }
              }}
            />
          </div>
        )}
        <div className="addbutton">
          <AddButton isActive={edit} onClick={() => setEdit((edit) => !edit)} />
        </div>
      </Container>
    </Root>
  );
};

export default App;
