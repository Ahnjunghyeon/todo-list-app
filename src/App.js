import "./App.css";
import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const TodoItemInputField = (props) => {
  const [input, setInput] = useState("");
  const onSubmit = () => {
    // onSubmit =폼이 제출될 때 무언가를 수행
    // props.onSubmit => TodoItemInputField 컴포넌트를 사용하는 ~에게서 onSubmit을 받아오는 코드
    // 즉 App의       <TodoItemInputField /> 에서 받아옴
    props.onSubmit(input);
    setInput("");
  };

  return (
    <div>
      <TextField
        id="todo-item-input"
        lable="Todo Item"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="outlined" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TodoItemInputField onSubmit={() => {}} />
    </div>
  );
}

export default App;
