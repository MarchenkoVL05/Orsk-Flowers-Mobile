// Импорт библиотек
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Импорт наших компонентов из корня проекта
import WelcomeScreen from '../screens/Welcome';
import SignInScreen from '../screens/SignInScreen';
import SignOutScreen from '../screens/SignUpScreen';

//Создаём стек навигации
const Stack = createStackNavigator();

//Создание и экспорт экрана авторизации 
export default function AuthStack() {
  //Рендер
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Добро пожаловать" component={WelcomeScreen} />
        <Stack.Screen name="Вход" component={SignInScreen} />
        <Stack.Screen name="Регистрация" component={SignOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}