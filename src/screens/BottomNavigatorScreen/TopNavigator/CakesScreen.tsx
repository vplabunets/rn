import React, { useState } from 'react';
import CardsList from '@/components/CardsList';
import Form from '@/components/Form';
import ModalWindow from '@/components/ModalWindow';
import { cakeItemsData } from '@/data/data';
import { View, StyleSheet } from 'react-native';
import { Item } from '@/types/types';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types/types';

type CakesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CakeInfo'>;

interface CakesScreenProps {
  navigation: CakesScreenNavigationProp;
}

function CakesScreen({ navigation }: CakesScreenProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState(cakeItemsData);
  const [comingItems, setItems] = useState(cakeItemsData);
  const [refreshing, setRefreshing] = useState(false);

  const onPressItem = (item: Item) => {
    navigation.navigate('CakeInfo', { item });
  };
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setItems(prevItems => [...prevItems, ...cakeItemsData]);
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
  },
});

export default CakesScreen;
