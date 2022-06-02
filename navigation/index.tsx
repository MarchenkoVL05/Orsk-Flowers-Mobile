// Импорт React'a 
import React from 'react';
// Импорт функции useAuthentication 
import { useAuthentication } from '../utils/hooks/useAuthentication';
// Импорт "страниц" авторизации и домашней
import UserStack from './userStack';
import AuthStack from './authStack';

// Создание и экспорт корневого Root'a 
export default function RootNavigation() {
  // Вытаскиваем данные пользователя из хука useAuthentication
  const { user } = useAuthentication();

  // Если данные пользователя есть, то открываем домашнюю страницу, если нет, то страницу авторизации
  return user ? <UserStack /> : <AuthStack />;
}