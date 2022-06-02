// Импорт реакта и функций из api firebase
import React from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

// Создаём переменную, принимает булевое значение (true - если авторизован )
const auth = getAuth();

// Функция полезная в других компонентах.
export function useAuthentication() {
  // Создаём состояние пользователя
  const [user, setUser] = React.useState<User>();

  React.useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Пользователь авторизован
        setUser(user);
      } else {
        // Пользователь неавторизован
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  // Функция возвращает данные пользователя из firebase
  return {
    user
  };
}

