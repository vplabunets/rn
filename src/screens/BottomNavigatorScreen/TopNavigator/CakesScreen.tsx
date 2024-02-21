import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';

import { itemsData } from '@/data/data';

import CardsList from '@/components/CardsList';
import Form from '@/components/Form';
import ModalWindow from '@/components/ModalWindow';

import { RootStackParamList, Item } from '@/types/types';
import { GlobalStyles } from '@/constants/styles';

type CakesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CakeInfo'>;

interface CakesScreenProps {
  navigation: CakesScreenNavigationProp;
}

function CakesScreen({ navigation }: CakesScreenProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState(itemsData.filter(item => item.productType === 'coffee'));

  useEffect(() => {
    setFilteredItems(itemsData.filter(item => item.productType === 'tea'));
  }, [itemsData]);

  const onPressItem = (item: Item) => {
    navigation.navigate('CakeInfo', { item });
  };

  const handleRefresh = () => {};

  function handleFilteredItems(query: string, isChecked: boolean): void {
    if (isChecked) {
      setFilteredItems(
        itemsData.filter(item => item.feature === 'new' && item.title.toLocaleLowerCase().includes(query.toLowerCase()))
      );
    } else {
      setFilteredItems(itemsData.filter(item => item.title.toLocaleLowerCase().includes(query.toLowerCase())));
    }
  }

  return (
    <View style={styles.container}>
      <Form handleModal={setModalVisible} modalVisible={modalVisible} handleFilteredItems={handleFilteredItems} />
      <CardsList items={filteredItems} refreshing={false} handleRefresh={handleRefresh} onPressItem={onPressItem} />
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

export default CakesScreen;
