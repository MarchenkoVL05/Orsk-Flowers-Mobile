// Импорт всего что нужно
import React, {createContext, useState} from 'react';
import { Alert } from 'react-native';
import { getProduct } from './services/ProductsService.js';

// Создаём конкект корзины при помощи встроенной фунции React = createContext
export const CartContext = createContext();

// Создаём обёртку (в неё завернём всё приложение, чтобы на всех страницах был доступ к корзине и тому что в ней)
export function CartProvider(props) {
  // Создаём состояние того что в корзине ( по дефолту пустой массив)
  const [items, setItems] = useState([]);

  // функция добавить в корщину букет
  function addItemToCart(id) {
    const product = getProduct(id);
    // Обновняем состояние корзины
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              product,
              totalPrice: product.price 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += product.price;
            }
            return item;
          });
      }
    });
  }

  // Сколько букетов добавлено
  function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }

  // Итоговая сумма оплаты
  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  

  // Получить товары из корзины
  function getProductsInCart() {
    let productsInCart = [];
    for (let i = 0; i < items.length; i++) {
      productsInCart.push(items[i].product.name);
    }
    return productsInCart.join();
  }

  // Удалить товар из корзины
  function deleteItemsFromCart() {
    setItems([]);
  }

  // Оборачиваем всё в провайдер корзины, Это наш контекст
  return (
    <CartContext.Provider
    // Теперь везде видны и используются эти функции 
      value={{items, setItems, getItemsCount, addItemToCart, deleteItemsFromCart, getTotalPrice, getProductsInCart}}>
      {props.children}
    </CartContext.Provider>
  );
}