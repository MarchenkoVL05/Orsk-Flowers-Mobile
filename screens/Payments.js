import React from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Pressable, Alert} from 'react-native';

export default function Payments() {
  const [name, onChangeName] = React.useState();
  const [phone, onChangePhone] = React.useState();
  const [adress, onChangeAdress] = React.useState();
  const [time, onChangeTime] = React.useState();

  const [checked, setChecked] = React.useState(false);

  function changingRadio() {
    setChecked(prevState => !prevState);
  }

  function callDelivery() {
    Alert.alert(name)
  }
  
  return (
    <View>
      <SafeAreaView style={styles.mainContainer}>
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
      <Pressable style={checked ? styles.radio : styles.radioTwo} onPress={changingRadio}></Pressable>
      <Text style={styles.radioText}>Наличными курьеру</Text>

      <Text style={styles.radioText}>Перевод на карту: 4242 XXXX XXXX XX42</Text>
      

      <Pressable style={styles.buyPress} onPress={callDelivery}>
              <Text style={styles.buyText}>Вызвать курьера</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
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



