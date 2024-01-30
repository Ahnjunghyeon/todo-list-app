import "./App.css";
import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// TodoItemInputField의 하는일 => 입력 + 제출 버튼
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

// 현재까지 추가된 TodoItem리스트를 받아오기 위해서 Props를 이용해서 다른 컴포넌트에서 받아와야 함.
// TodoItemList의 하는일 => 제출된 아이템 리스트를 Array로 만들어 제공
const TodoItemList = (props) => {
  // TodoItemList 의 todoItem를 Array로 받아와서 map 을통해 리스트아이템으로 반환
  const todoList = props.TodoItemList.map((todoItem, index) => {
    return <li key={index}>{todoItem.todoItemCOntent}</li>;
  });
  return <div></div>;
};

function App() {
  const [todoItemList, setTodoItemList] = useState([]);

  return (
    <div className="App">
      <TodoItemInputField
        onSubmit={(input) => {
          console.log(input);
        }}
      />
      {/* 해당부분부터 다시하기 */}
      <TodoItemList todoItemList={[]} />
    </div>
  );
}

export default App;
