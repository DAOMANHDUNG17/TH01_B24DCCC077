import { useState } from "react";

function Post({ text }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div style={{ marginBottom: 12 }}>
      <p>{text}</p>
      <button onClick={() => setLike(l => l + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(d => d + 1)} style={{ marginLeft: 8 }}>👎 {dislike}</button>
    </div>
  );
}

export default function PostList() {
  return (
    <div>
      <h2>Bài 4: Like/Dislike Post</h2>
      <Post text="Học ReactJS có khó không?" />
      <Post text="Props và State là gì?" />
      <Post text="Lập trình web có vui không?" />
    </div>
  );
}
