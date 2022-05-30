import React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';


const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Pressable style={styles.buttonIn} onPress={() => navigation.navigate('Вход')}>
          <Text style={styles.textIn}>Вход</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Регистрация')}>
          <Text style={styles.text}>Регистрация</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    marginTop: 20,
    width: 170,
    height: 40,
    backgroundColor: '#9dd558',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  buttonIn: {
    width: 170,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  text: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase'
  },

  textIn: {
    color: '#9dd558',
    fontSize: 18,
    textTransform: 'uppercase'
  }
});

export default WelcomeScreen;