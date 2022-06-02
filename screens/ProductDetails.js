// Импорт Реакта и функций
import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet,
  Pressable,
  Alert
  } from 'react-native';
import { getProduct } from '../services/ProductsService.js';
import { CartContext } from '../CartContext';

import { LinearGradient } from 'expo-linear-gradient';


// Импорт страницы Детали продукта
export function ProductDetails({route}) {
  // Устанавливаем состояние продукта
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  // Вытаскиваем функцию из контекста
  const { addItemToCart } = useContext(CartContext);

  // Подписываемся на изменение продукста из списка
  useEffect(() => {
    setProduct(getProduct(productId));
  });

  // Функция добавления в корзину
  function onAddToCart() {
    addItemToCart(product.id);
    Alert.alert('Добавлено в корзину!');
  }


  // Рендер страницы Детали продукта
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <Image
          style={styles.image}
          source={product.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>₽ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Pressable style={styles.btnPress} onPress={onAddToCart}>
            <Text style={styles.btnText}>Добавить в корзину</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Стили
const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignContent: 'center',
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },

    elevation: 1,
    marginVertical: 20,
  },

  image: {
    height: 300,
    width: '100%'
  },

  infoContainer: {
    padding: 16,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },

  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },

  btnText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },

  btnPress: {
    backgroundColor: '#9dd558',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    height: 50,
    width: 350,
    borderRadius: 10,
  },

  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
});