"use client"
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
  <div>
    <h2>Your Cart</h2>

    {cart.length === 0 && <p>Cart is empty</p>}

    {cart.map(item => (
      <div key={item.id}>
        <Image src={item.image} width={200} height={200} alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.price}</p>

        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)}>+</button>

        <button onClick={() => removeFromCart(item.id)}></button>
      </div>
    ))}

    <h2>Total: ${total.toFixed(2)}</h2>
  </div>
  );
}