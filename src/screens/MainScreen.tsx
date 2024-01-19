import React, { useEffect, useState } from 'react';
import CardsList from '@/components/CardsList';
import Form from '@/components/Form';
import ModalWindow from '@/components/ModalWindow';
import { ItemData } from '@/data/data';

function MainScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState(ItemData);

  const [newItems, setNewItems] = useState('');

  function handleFilteredItems(query: string, isChecked: boolean): void {
    if (isChecked) {
      setFilteredItems(
        ItemData.filter(
          item =>
            item.feature === 'new' &&
            item.title.toLocaleLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredItems(
        ItemData.filter(item =>
          item.title.toLocaleLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }
  return (
    <>
      <Form
        handleModal={setModalVisible}
        modalVisible={modalVisible}
        handleFilteredItems={handleFilteredItems}
      />
      <CardsList items={filteredItems} />
      <ModalWindow handleModal={setModalVisible} modalVisible={modalVisible} />
    </>
  );
}

export default MainScreen;
