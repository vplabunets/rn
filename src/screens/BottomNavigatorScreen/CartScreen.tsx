import Button from '@/UI/Button';
import IconButton from '@/UI/IconButton';
import { GlobalStyles } from '@/constants/styles';
import { itemsData } from '@/data/data';
import { addProduct, cleanCart, removeProduct, removeProductCompletely } from '@/store/cart/cartReducer';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/store/store';
import { placeOrder } from '@/store/orders/ordersReducer';

interface ProductItem {
  id: any;
  quantity: number;
}

//@ts-ignore
const renderItem = (item, handleRemoveItem, handleRemoveItemCompletely, handleIncrementItem) => {
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
              onPress={() => handleRemoveItem(item.id, 1)}
            />
            <Text style={{ paddingRight: 5 }}> {item.quantity}</Text>
            <IconButton
              icon="add-circle-sharp"
              color={GlobalStyles.colors.accentColor}
              onPress={() => handleIncrementItem(item.id, 1)}
            />
          </View>
          <Text>Total price: {(item.price * item.quantity).toFixed(2)} USD</Text>
        </View>
        <Button onPress={() => handleRemoveItemCompletely(item.id)}>
          <Text>-</Text>
        </Button>
      </View>
    </View>
  );
};

const CartScreen = () => {
  const [cart, setCart] = useState<ProductItem[]>([]);
  const dispatch = useAppDispatch();

  const selectedCart = useSelector((state: RootState) => state.cart);
  const user = useSelector((state: RootState) => state.auth.name);

  const displayCartArray = selectedCart.map(cartItem => {
    const foundItem = itemsData.find(item => item.id === cartItem.productId);
    if (foundItem) {
      return { ...foundItem, quantity: cartItem.quantity };
    }
  });

  //@ts-ignore
  useEffect(() => setCart(displayCartArray), [selectedCart, cleanCart]);

  const removeItemCompletely = (productId: number) => {
    //@ts-ignore
    dispatch(removeProductCompletely({ productId }));
  };

  const removeItem = (productId: number, quantity: number) => {
    dispatch(removeProduct({ productId, quantity }));
  };

  const incrementItem = (productId: number, quantity: number) => {
    dispatch(addProduct({ productId, quantity }));
  };

  const addOrder = (user: string, id: string, products: ProductItem[]) => {
    dispatch(placeOrder({ user, id, products }));
    setCart([]);
    dispatch(cleanCart());
  };

  return (
    <View style={styles.container}>
      {cart.length ? (
        <>
          <FlatList
            data={cart}
            renderItem={({ item }) => {
              return renderItem(item, removeItem, removeItemCompletely, incrementItem);
            }}
            keyExtractor={(item: ProductItem) => item.id.toString()}
          />
          <Button onPress={() => addOrder(user, new Date().toISOString(), cart)}>
            <Text> Confirm order</Text>
          </Button>
        </>
      ) : (
        <Text>Your cart is empty</Text>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.bgcolorCard,
    padding: 20,
  },
  confirmButton: {
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 12,

    color: GlobalStyles.colors.mainTextColor,
    backgroundColor: GlobalStyles.colors.accentColor,
  },
  image: {
    borderRadius: 12,
    width: 120,
    height: '100%',
    backgroundColor: GlobalStyles.colors.backgroundGrey,
  },
});
