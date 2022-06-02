//Импорт библиотек React и React Native
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Импорт контекста корзины
import { CartContext } from '../CartContext';

//Объявление и экспорт иконки Корзины
export function CartIcon({navigation}) {
  //Вытаскиваем из конткекста функцию getItemsCount, возвращает количество добавленных товаров
  const {getItemsCount} = useContext(CartContext);
  //Рендер компонента
  return (
    <View style={styles.container}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >Корзина ({getItemsCount()})</Text>
    </View>
  );
}

//Стили корзины
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: '#a010ff',
    height: 35,
    padding: 8,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});