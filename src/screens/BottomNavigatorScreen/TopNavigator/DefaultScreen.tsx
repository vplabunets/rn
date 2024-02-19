import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { GlobalStyles } from '@/constants/styles';
import { itemsData } from '@/data/data';

import CardsList from '@/components/CardsList';
import Form from '@/components/Form';
import ModalWindow from '@/components/ModalWindow';

import { StackNavigationProp } from '@react-navigation/stack';
import { Item, RootStackParamList } from '@/types/types';

type DefaultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CoffeeInfo'>;

interface DefaultScreenProps {
  navigation: DefaultScreenNavigationProp;
}

function DefaultScreen({ navigation }: DefaultScreenProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [comingItems, setItems] = useState(itemsData.filter(item => item.productType === 'coffee'));
  const [filteredItems, setFilteredItems] = useState(itemsData.filter(item => item.productType === 'coffee'));
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setFilteredItems(comingItems);
  }, [comingItems]);

  const onPressItem = (item: Item) => {
    navigation.navigate('CakeInfo', { item });
  };
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setItems(prevItems => [...prevItems, ...itemsData.filter(item => item.productType === 'coffee')]);
      setRefreshing(false);
    }, 1000);
  };
  function handleFilteredItems(query: string, isChecked: boolean): void {
    if (isChecked) {
      setFilteredItems(
        comingItems.filter(
          item => item.feature === 'new' && item.title.toLocaleLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredItems(comingItems.filter(item => item.title.toLocaleLowerCase().includes(query.toLowerCase())));
    }
  }
  return (
    <View style={styles.container}>
      <Form handleModal={setModalVisible} modalVisible={modalVisible} handleFilteredItems={handleFilteredItems} />
      <CardsList
        items={filteredItems}
        refreshing={refreshing}
        handleRefresh={handleRefresh}
        onPressItem={onPressItem}
      />
      <ModalWindow handleModal={setModalVisible} modalVisible={modalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.bgcolorCard,
  },
});

export default DefaultScreen;
