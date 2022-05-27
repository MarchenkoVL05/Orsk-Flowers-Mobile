import React, { useState, useContext } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Pressable, Alert} from 'react-native';

import email from 'react-native-email';

import { useAuthentication } from '../utils/hooks/useAuthentication';
import { CartContext } from '../CartContext';

export default function Payments() {
  const [name, onChangeName] = React.useState();
  const [phone, onChangePhone] = React.useState();
  const [adress, onChangeAdress] = React.useState();
  const [time, onChangeTime] = React.useState();

  const [checked, setChecked] = React.useState(false);

  function changingRadio() {
    setChecked(prevState => !prevState);
  }

  const { user } = useAuthentication();

  const {getProductsInCart, getItemsCount, getTotalPrice} = useContext(CartContext);

  function callDelivery() {
    const to = ['Korotaevm97@gmail.com']
    email(to, {
      // Optional additional arguments
      body: `Новый заказ! Товар: ${getProductsInCart()},
                          Количество букетов: ${getItemsCount()},
                          Сумма: ${getTotalPrice()},
                          Имя клиента: ${name},
                          Почта клиента: ${user.email},
                          Номер для связи: ${phone},
                          Адрес доставки: ${adress},
                          Удобное время: ${time}
                          Наличными курьеру: ${checked ? 'да' : 'нет, оплачено по номеру карты'}
      `
    }).catch(console.error)
  }
  
  return (
    <View style={styles.containerWrapper}>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(newValue) => onChangeName(newValue)}
          placeholder="Имя"
        />
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(newValue) => onChangePhone(newValue)}
          placeholder="Телефон"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          value={adress}
          onChangeText={(newValue) => onChangeAdress(newValue)}
          placeholder="Адрес"
        />
        <TextInput
          style={styles.input}
          value={time}
          onChangeText={(newValue) => onChangeTime(newValue)}
          placeholder="Удобное время"
        />
      </SafeAreaView>

      <Text style={styles.payText}>Способ оплаты</Text>
      <Pressable style={checked ? styles.radioTwo : styles.radio} onPress={changingRadio}></Pressable>
      <Text style={styles.radioText}>Наличными курьеру</Text>

      <Text style={styles.radioText}>Перевод на карту: 4242 XXXX XXXX XX42</Text>
      

      <Pressable style={styles.buyPress} onPress={callDelivery}>
              <Text style={styles.buyText}>Вызвать курьера</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  containerWrapper: {
    marginTop: 30,
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: 320,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    margin: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#c6c6c6',
    borderRadius: 10,
  },

  payText: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: 20,
    marginLeft: 35,
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: 'white',
    marginLeft: 35,
    marginTop: 20,
    marginBottom: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },

  radioTwo: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: 'blue',
    marginLeft: 35,
    marginTop: 20,
    marginBottom: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },

  radioText: {
    fontSize: 20,
    color: 'black',
    marginLeft: 35,
    marginBottom: 30,
  },

  buyPress: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c156ff',
    textAlign: 'center',
    height: 50,
    width: 300,
    borderRadius: 10,
    marginBottom: 30,
    marginLeft: 35,
  },

  buyText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  }
});



