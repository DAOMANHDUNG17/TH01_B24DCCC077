import React from "react";
import './App.css';

// Giữ lại các component cần thiết
import TodoList from './TodoList';
import ColorPicker from './ColorPicker';
import Cart from './Cart';
import Postlist from './Postlist';
import QuizApp from './QuizApp';

function App() {
  return (
    <div style={{ padding: 20 }} className="app-container">
      <h1 style={{ marginTop: "20px" }}>Tổng hợp các Bài thực hành</h1>

      <hr />
      <div><b>Todo List:</b></div>
      <TodoList />

      <hr />
      <div><b>Color Picker:</b></div>
      <ColorPicker />

      <hr />
      <div><b>Shopping Cart:</b></div>
      <Cart />

      <hr />
      <div><b>Post List:</b></div>
      <Postlist />

      <hr />
      <div><b>Quiz App:</b></div>
      <QuizApp />
    </div>
  );
}

export default App;
