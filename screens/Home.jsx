import { useEffect, useState} from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { signOut, getAuth } from 'firebase/auth';

import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService';

import { LinearGradient } from 'expo-linear-gradient';

const auth = getAuth();


export default function HomeScreen({ navigation }) {
  const { user } = useAuthentication();

  const [products, setProducts] = useState([]);

  function renderProduct({item: product}) {
    return (
      <Product 
        {...product} 
        onPress={() => {
          navigation.navigate('ProductDetails', {
            productId: product.id,
          });
        }}
      />
    );
  }

  useEffect(() => {
    setProducts(getProducts());
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>Welcomee {user?.email}!</Text>
      </View>

      <View style={styles.btnInner}>
        <Pressable style={styles.button} onPress={() => signOut(auth)}>
            <Text style={styles.textOut}>Выйти</Text>
        </Pressable>
      </View>
    
      <View style={styles.mainContainer}>
        <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffe8ef'
  },

  headerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    padding: 10
  },

  btnInner: {
    alignItems: 'flex-end',
    margin: 10,
  },

  button: {
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9dd558',
    borderRadius: 5,
  },

  text: {
    fontSize: 16,
    marginBottom: 10
  },

  textOut: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 16,
  },

  productsList: {
    backgroundColor: '#ffe8ef',
  },

  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});