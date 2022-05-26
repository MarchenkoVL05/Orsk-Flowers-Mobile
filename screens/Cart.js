import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Pressable, Alert } from 'react-native';
import { CartContext } from '../CartContext';
export function Cart ({navigation}) {
const {items, getItemsCount, getTotalPrice} = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
       <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>₽ {total}</Text>
       </View>
    );
  }
function renderItem({item}) {
    return (
       <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
          <Text style={styles.lineRight}>₽ {item.totalPrice}</Text>
       </View>
    );
  }
function acceptPayments() {
  navigation.navigate('Payments');
}

  return (
    <View style={styles.mainView}>
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id.toString()}
        ListFooterComponent={Totals}
      />
      <Pressable style={styles.buyPress} onPress={acceptPayments}>
              <Text style={styles.buyText}>Оформить заказ</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' 
  },
  lineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  itemsList: {
    backgroundColor: '#fce1ff4d',
    width: '100%',
  },
  itemsListContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  buyPress: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9dd558',
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
  }
});