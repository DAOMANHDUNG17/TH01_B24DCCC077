import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setList(prev => [...prev, task.trim()]);
    setTask("");
  };

  const removeTask = (index) => {
    setList(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Bài 1: To-do List</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={addTask}>Thêm</button>

      <ul>
        {list.map((item, idx) => (
          <li key={idx}>
            {item} <button onClick={() => removeTask(idx)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
