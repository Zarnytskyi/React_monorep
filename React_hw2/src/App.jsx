import { useState } from 'react'
import Greeting from './Greeting'
import ShoppingList from './ShoppingList'
import OrderStatus from './OrderStatus';

function App() {
  const shoppingList = [
    "Хлеб",
    "Молоко",
    "Яйца",
    "Сыр",
    "Помидоры",
    "Огурцы",
    "Кофе",
    "Шоколад"
  ];
  const orders = [
    { orderId: 101, status: "обработан" },
    { orderId: 102, status: "в пути" },
    { orderId: 103, status: "доставлен" }
  ];
  return (
    <>
    <Greeting name="John" />
    <ShoppingList item={shoppingList}/>
    <OrderStatus items = {orders}/>
    </>
  )
}

export default App
