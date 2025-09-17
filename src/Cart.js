import { useState } from "react";

export default function Cart() {
  const products = [
    { id: 1, name: "Sách", price: 10000 },
    { id: 2, name: "Bút", price: 5000 },
    { id: 3, name: "Vở", price: 7000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const total = cart.reduce((s, p) => s + p.price, 0);

  return (
    <div>
      <h2>Bài 3: Giỏ hàng</h2>
      <h3>Sản phẩm</h3>
      {products.map(p => (
        <div key={p.id} style={{ marginBottom: 8 }}>
          {p.name} - {p.price}₫ <button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
        </div>
      ))}

      <h3>Giỏ hàng</h3>
      {cart.length === 0 ? (
        <div>Giỏ hàng trống</div>
      ) : (
        cart.map((c, i) => <div key={i}>{c.name} - {c.price}₫</div>)
      )}

      <p><b>Tổng tiền:</b> {total}₫</p>
    </div>
  );
}
