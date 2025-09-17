import { useState } from "react";

export default function QuizApp() {
  const questions = [
    { q: "ReactJS dùng để làm gì?", options: ["Mobile App","Web UI","Hệ điều hành","Cơ sở dữ liệu"], answer: 1 },
    { q: "Props dùng để?", options: ["Truyền dữ liệu","Quản lý state","Tạo CSS","Xóa component"], answer: 0 },
    { q: "Hook useState dùng để?", options: ["Tạo API","Lưu state","Render UI","Tạo class"], answer: 1 },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (i) => {
    const correct = i === questions[current].answer;
    if (correct) setScore(s => s + 1);
    setShowAnswer(correct);
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(c => c + 1);
        setShowAnswer(null);
      } else {
        setFinished(true);
      }
    }, 700);
  };

  if (finished) {
    return (
      <div>
        <h2>Bài 5: Quiz App</h2>
        <h3>Bạn trả lời đúng {score}/{questions.length} câu</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>Bài 5: Quiz App</h2>
      <p>{questions[current].q}</p>
      {questions[current].options.map((opt, idx) => (
        <button key={idx} onClick={() => handleAnswer(idx)} style={{ display: 'block', margin: '6px 0' }}>{opt}</button>
      ))}
      {showAnswer !== null && <div>{showAnswer ? 'Đúng!' : 'Sai!'}</div>}
    </div>
  );
}
