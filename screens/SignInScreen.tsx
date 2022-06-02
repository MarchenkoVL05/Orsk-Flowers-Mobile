// Импорт бибоилтек
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Используем фунцию авторизации из API firebase
const auth = getAuth();

// Функция создания страницы Входа
const SignInScreen = () => {
  // Состояние данных пользователя
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })

  // Функция Входа
  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      // Фунцкия Входа по email и паролю из api firebase
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error:any) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  // Рендер страницы Входа
  return (
    <View style={styles.container}>
      {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}

      <View style={styles.controls}>
        <Input
          placeholder='Email'
          containerStyle={styles.control}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          leftIcon={<Icon
            name='envelope'
            size={16}
          />}
        />

        <Input
          placeholder='Пароль'
          containerStyle={styles.control}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
          leftIcon={<Icon
            name='key'
            size={16}
          />}
        />

        <Pressable style={styles.press} onPress={signIn}>
          <Text style={styles.text}>Войти</Text>
        </Pressable>
      </View>
    </View>
  );
}


// Стили
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  controls: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
  },

  control: {
    marginTop: 10
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  },
  
  text: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase'
  },

  press: {
    marginTop: 20,
    width: 170,
    height: 40,
    backgroundColor: '#9dd558',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  }
});

export default SignInScreen;