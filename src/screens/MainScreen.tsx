import React, { useEffect, useState } from 'react';
import CardsList from '@/components/CardsList';
import Form from '@/components/Form';
import ModalWindow from '@/components/ModalWindow';
import { coffeeItemsData1 } from '@/data/data';
import { coffeeItemsData2 } from '@/data/data';
import { View, StyleSheet } from 'react-native';
//@ts-ignore

function MainScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [comingItems, setItems] = useState(coffeeItemsData1);
  const [filteredItems, setFilteredItems] = useState(coffeeItemsData1);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setFilteredItems(comingItems);
  }, [comingItems]);

  //@ts-ignore
  const onPressItem = item => {
    // Додайте обробник натискань
    navigation.navigate('CakeInfo', { item }); // Передайте дані про елемент CakeInfo через навігацію
  };
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setItems(prevItems => [...prevItems, ...coffeeItemsData2]);
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

export default MainScreen;
