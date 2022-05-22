import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductDetails } from '../screens/ProductDetails.js';
import { Cart } from '../screens/Cart.js';
import { CartIcon } from '../components/CartIcon.js';
import { CartProvider } from '../CartContext.js';
import Home from '../screens/Home';

import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} 
            options={({ navigation }) => ({
              title: 'Home',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>
            })}/>
            <Stack.Screen name='ProductDetails' component={ProductDetails} 
            options={({ navigation }) => ({
              title: 'Product details',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>,
            })} />
            <Stack.Screen name='Cart' component={Cart} 
            options={({ navigation }) => ({
              title: 'My cart',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>,
            })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});