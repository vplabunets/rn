import React, { useState, useEffect } from 'react';
import CardsList from '@/components/CardsList';
import Form from '@/components/Form';
import ModalWindow from '@/components/ModalWindow';
import { teaItemsData } from '@/data/data';
import { View, StyleSheet } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { Item, RootStackParamList } from '@/types/types';
import { GlobalStyles } from '@/constants/styles';

type TeaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TeaInfo'>;

interface TeaScreenProps {
  navigation: TeaScreenNavigationProp;
}
function TeaScreen({ navigation }: TeaScreenProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState(teaItemsData);
  const [comingItems, setItems] = useState(teaItemsData);
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
      setItems(prevItems => [...prevItems, ...teaItemsData]);
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

export default TeaScreen;
