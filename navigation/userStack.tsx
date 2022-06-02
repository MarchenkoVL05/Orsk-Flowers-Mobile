// Импорт React и библиотек
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Импорт компонентов 
import { ProductDetails } from '../screens/ProductDetails.js';
import { Cart } from '../screens/Cart.js';
import { CartIcon } from '../components/CartIcon.js';
import { CartProvider } from '../CartContext.js';

// Импорт страниц
import Home from '../screens/Home';
import Payments from '../screens/Payments.js';
import HomeScreen from '../screens/Home';

//Создаём стек навигации
const Stack = createStackNavigator();

//Создание и экспорт стека пользователя
export default function UserStack() {
  //Рендер
  return (
    //Оборачиваем компонент в проводник
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} 
            options={({ navigation }) => ({
              title: 'Букеты',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>
            })}/>
            <Stack.Screen name='ProductDetails' component={ProductDetails} 
            options={({ navigation }) => ({
              title: 'Детали',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>,
            })} />
            <Stack.Screen name='Cart' component={Cart} 
            options={({ navigation }) => ({
              title: 'Добавлено',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>,
            })} />
            <Stack.Screen name='Payments' component={Payments} 
            options={({ navigation }) => ({
              title: 'Оформление',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>,
            })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

//Стили
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 22,
    color: '#565656',
  }
});