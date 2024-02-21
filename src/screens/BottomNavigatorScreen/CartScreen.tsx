import Button from '@/UI/Button';
import IconButton from '@/UI/IconButton';
import { GlobalStyles } from '@/constants/styles';
import { itemsData } from '@/data/data';
import { addProduct, removeProduct } from '@/redux/cart/cartReducer';
import { getCart } from '@/redux/cart/cartSelectors';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface ProductItem {
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
              onPress={() => handleIncrementItem(item.id, 1)}
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
  const [cart, setCart] = useState<ProductItem[]>([]);
  const dispatch = useDispatch();
  const selectedCart = useSelector((state: RootState) => state.cart);

  const displayCartArray = selectedCart.map(cartItem => {
    const foundItem = itemsData.find(item => item.id === cartItem.productId);
    if (foundItem) {
      return { ...foundItem, quantity: cartItem.quantity };
    }
  });

  //@ts-ignore
  useEffect(() => setCart(displayCartArray), [selectedCart]);

  const removeItem = (id: number) => {
    //@ts-ignore
    dispatch(removeProduct(id));
  };

  const incrementItem = (productId: number, quantity: number) => {
    dispatch(addProduct({ productId, quantity }));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => {
          console.log(item);

          return renderItem(item, removeItem, incrementItem);
        }}
        keyExtractor={(item: ProductItem) => item.productId.toString()}
      />
      <Button onPress={() => console.log('Confirm order')}>
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
