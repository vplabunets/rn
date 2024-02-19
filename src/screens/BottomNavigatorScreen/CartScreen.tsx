import Button from '@/UI/Button';
import IconButton from '@/UI/IconButton';
import { GlobalStyles } from '@/constants/styles';
import { itemsData } from '@/data/data';
import { addProduct } from '@/redux/cart/cartReducer';
import { getCart } from '@/redux/cart/cartSelectors';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

interface Product {
  productId: any;
  quantity: number;
}

//@ts-ignore
const renderItem = (item, handleRemoveItem, handleIncrementItem) => {
  console.log('item', item);

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 12,
        elevation: 10,
        shadowColor: GlobalStyles.colors.accentColor,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          // alignContent: 'center',
          height: 120,
          padding: 10,
          backgroundColor: GlobalStyles.colors.background,
          borderRadius: 12,
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri: item.url,
          }}
          resizeMode="cover"
        />
        <View style={{ height: '100%', justifyContent: 'center' }}>
          <Text style={{ paddingBottom: 5 }}>{item.title}</Text>
          <Text style={{ paddingBottom: 5 }}>Unit price:{item.price} USD</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
            <IconButton
              icon="remove-circle-sharp"
              color={GlobalStyles.colors.accentColor}
              onPress={() => console.log('remove item')}
            />
            <Text style={{ paddingRight: 5 }}> {item.quantity}</Text>
            <IconButton
              icon="add-circle-sharp"
              color={GlobalStyles.colors.accentColor}
              onPress={() => handleIncrementItem(item.id, item.quantity)}
            />
          </View>
          <Text>Total price: {(item.price * item.quantity).toFixed(2)} USD</Text>
        </View>
        <Button onPress={() => handleRemoveItem(item.id)}>
          <Text>-</Text>
        </Button>
      </View>
    </View>
  );
};

const CartScreen = () => {
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const selectedCart = useSelector(getCart);

  const displayCartArray = selectedCart.map(cartItem => {
    const foundItem = itemsData.find(item => item.id === cartItem.productId);
    if (foundItem) {
      return { ...foundItem, quantity: cartItem.quantity };
    }
  });

  console.log(displayCartArray);

  //@ts-ignore
  useEffect(() => setCart(displayCartArray), []);
  //@ts-ignore
  const removeItem = id => {
    setCart(prevCart => {
      console.log(prevCart);
      //@ts-ignore
      return prevCart.filter(el => el.id !== id);
    });
  };
  //@ts-ignore

  const incrementItem = (productId, quantity) => {
    dispatch(addProduct({ productId, quantity }));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => {
          return renderItem(item, removeItem, incrementItem);
        }}
        //@ts-ignore
        keyExtractor={item => item.id.toString()}
        // numColumns={1}
      />
      <Button onPress={() => console.log('hello')}>
        <Text> Confirm order</Text>
      </Button>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.lightBackgroundColor,
    padding: 20,
  },
  confirmButton: {
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: 'flex-end',
    // width: 96,
    // height: 48,
    borderRadius: 12,

    color: GlobalStyles.colors.mainTextColor,
    backgroundColor: GlobalStyles.colors.accentColor,
  },
  image: {
    borderRadius: 12,
    width: 120,
    height: '100%',
    backgroundColor: 'yellow',
  },
});
