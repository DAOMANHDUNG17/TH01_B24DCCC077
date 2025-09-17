<<<<<<< HEAD
import './App.css';
import TodoList from './TodoList';
import ColorPicker from './ColorPicker';
import Cart from './Cart';
import Postlist from './Postlist';
import QuizApp from './QuizApp';

function App() {
  return (
    <div className="App" style={{ padding: 20 }}>
      <TodoList />
      <hr />
      <ColorPicker />
      <hr />
      <Cart />
      <hr />
      <Postlist />
      <hr />
      <QuizApp />
=======
import React from "react";
import DemSo from "./DemSo";
import DanhSachCongViec from "./DanhSachCongViec";
import DoiMauNen from "./DoiMauNen";
import DongHo from "./DongHo";
import TheSinhVien from "./TheSinhVien";
import './App.css';

function App() {
  return (
    <div style={{ padding: 20 }} className="app-container">
      <h1 style={{ marginTop: "20px" }}>Bài thực hành 01</h1>

      <br />

      <div><b>Bài 1: Ứng dụng Đếm số:</b></div>
      <DemSo />
      <br />

      <div><b>Bài 2: Danh sách công việc:</b></div>
      <DanhSachCongViec />
      <br />

      <div><b>Bài 3: Ứng dụng đổi màu nền:</b></div>
      <DoiMauNen />
      <br />

      <div><b>Bài 4: Thẻ thông tin sinh viên:</b></div>
      <TheSinhVien />
      <br />

      <div><b>Bài 5: Đồng hồ:</b></div>
      <DongHo />
>>>>>>> ba57b3089b90d6fb91a6ab423038ec5c6f4555d8
    </div>
  );
}

export default App;
