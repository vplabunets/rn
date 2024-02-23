import { GlobalStyles } from '@/constants/styles';
import { View, StyleSheet, FlatList, Text, ScrollView, Image } from 'react-native';

import { RootState, useAppDispatch } from '@/store/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { itemsData } from '@/data/data';
interface ProductItem {
  id: any;
  quantity: number;
}
interface Order {
  user: string;
  id: string;
  products: ProductItem[];
}

const renderItem = (item: any) => {
  return (
    <View style={{ flex: 1 }}>
      {item.map((element: any, index: number) => {
        const itemData = itemsData.find(itemData => itemData.id === element.id);

        return (
          <View
            key={index}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 2,
            }}
          >
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                marginRight: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text>{element.title}</Text>
              <Image source={{ uri: itemData?.url }} style={{ height: 50, width: 50 }} resizeMode="cover" />
            </View>
            <Text style={{ flex: 1, justifyContent: 'center' }}>{element.quantity} pcs</Text>
            <Text style={{ flex: 1 }}>{element.price * element.quantity} USD</Text>
          </View>
        );
      })}
    </View>
  );
};

const MyOrdersScreen = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const ordersData = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    setOrders(ordersData);
  }, [ordersData]);

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => {
          return (
            <View style={{ padding: 10 }}>
              <View
                style={{
                  backgroundColor: GlobalStyles.colors.lightAccentColor,
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: GlobalStyles.colors.accentColor,
                  padding: 10,
                }}
              >
                <Text style={{ marginBottom: 10, color: GlobalStyles.colors.mainTextColor, fontWeight: 'bold' }}>
                  Order number: {item.id}
                </Text>
                {renderItem(item.products)}
              </View>
            </View>
          );
        }}
        keyExtractor={(item: Order, index) => index.toString()}
      />
    </View>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.bgcolorCard,
  },
});
