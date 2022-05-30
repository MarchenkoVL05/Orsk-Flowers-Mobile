import React, { useState, useContext } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Pressable } from 'react-native';

import email from 'react-native-email';

import { useAuthentication } from '../utils/hooks/useAuthentication';
import { CartContext } from '../CartContext';
import { ScrollView } from 'react-native';

export default function Payments() {
  const [name, onChangeName] = React.useState();
  const [phone, onChangePhone] = React.useState();
  const [adress, onChangeAdress] = React.useState();
  const [time, onChangeTime] = React.useState();
  const [comment, onChangeComment] = React.useState();

  const [nameReceiver, onChangeNameReceiver] = React.useState();
  const [phoneReceiver, onChangePhoneReceiver] = React.useState();

  const [checked, setChecked] = React.useState(false);
  const [pickup, setPickup] = React.useState(false);
  const [anon, setAnon] = React.useState(false);

  function changingRadio() {
    setChecked(prevState => !prevState);
  }

  function changingRadioPickup() {
    setPickup(prevState => !prevState);
  }

  function changingRadioAnon() {
    setAnon(prevState => !prevState);
  }

  const { user } = useAuthentication();

  const {getProductsInCart, getItemsCount, getTotalPrice} = useContext(CartContext);

  function callDelivery() {
    const to = ['Korotaevm97@gmail.com']
    email(to, {
      // Optional additional arguments
      body: `Новый заказ!<br \/>Товар: ${getProductsInCart()}<\/br>
                          Количество букетов: ${getItemsCount()}<\/br>
                          Сумма: ${getTotalPrice()}<\/br>
                          <\/br>
                          Имя клиента: ${name}<\/br>
                          Почта клиента: ${user.email}<\/br>
                          Номер для связи: ${phone}<\/br>
                          Адрес доставки: ${pickup ? "Самовывоз" : adress}<\/br>
                          Удобное время: ${time}<\/br>
                          Комментарий: ${comment}<\/br>
                          <\/br>
                          Отправить анонимно: ${anon ? 'да' : 'нет'}<\/br>
                          Имя получателя: ${nameReceiver}<\/br>
                          Телефон получатея: ${phoneReceiver}<\/br>
                          <\/br>
                          Наличными курьеру: ${checked ? 'да' : 'нет, оплачено по номеру карты'}
      `
    }).catch(console.error)
  }
  
  return (
    <ScrollView style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
      <Text style={styles.clientText}>Заказчик</Text>
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
        <Pressable style={[pickup ? styles.radioTwo : styles.radio, {marginRight: 320}]} onPress={changingRadioPickup}></Pressable>
        <Text style={[styles.radioText, {marginRight: 230}]}>Самовывоз</Text>

        <TextInput
          style={styles.input}
          value={adress}
          onChangeText={(newValue) => onChangeAdress(newValue)}
          placeholder={pickup ? '' : 'Адрес'}
          editable={pickup ? false : true}
        />

        <TextInput
          style={styles.input}
          value={time}
          onChangeText={(newValue) => onChangeTime(newValue)}
          placeholder="Удобное время"
        />

        <TextInput
          style={[styles.input, {height: 100}]}
          value={comment}
          onChangeText={(newValue) => onChangeComment(newValue)}
          placeholder="Комментарий"
        />

        <Text style={styles.receiverText}>Получатель</Text>
        <Pressable style={[anon ? styles.radioTwo : styles.radio, {marginRight: 320}]} onPress={changingRadioAnon}></Pressable>
        <Text style={[styles.radioText, {marginRight: 220}]}>Отправить анонимно</Text>
        <TextInput
          style={styles.input}
          value={nameReceiver}
          onChangeText={(newValue) => onChangeNameReceiver(newValue)}
          placeholder="Имя Получателя"
        />
        <TextInput
          style={styles.input}
          value={phoneReceiver}
          onChangeText={(newValue) => onChangePhoneReceiver(newValue)}
          placeholder="Телефон получателя"
          keyboardType="phone-pad"
        />


        <Text style={styles.payText}>Способ оплаты</Text>
        <Pressable style={[checked ? styles.radioTwo : styles.radio, {marginRight: 320}]} onPress={changingRadio}></Pressable>
        <Text style={[styles.radioText, {marginRight: 220}]}>Наличными курьеру</Text>


        <Text style={styles.cardText}>Перевод на карту: 4242 XXXX XXXX XX42</Text>
      

        <Pressable style={styles.buyPress} onPress={callDelivery}>
                <Text style={styles.buyText}>Вызвать курьера</Text>
        </Pressable>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
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
    marginRight: 90
  },

  radio: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    marginLeft: 45,
    marginBottom: 7,
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 2,
  },

  radioTwo: {
    width: 20,
    height: 20,
    backgroundColor: '#9dd558',
    marginTop: 20,
    marginLeft: 45,
    marginBottom: 7,
    borderColor: 'black',
    borderWidth: 2,
  },

  radioText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 30,
    marginLeft: 35
  },

  cardText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 30,
    width: 300,
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
  },

  buyText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },

  receiverText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginRight: 140
  },

  clientText: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginRight: 180
  },
});



