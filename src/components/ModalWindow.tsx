import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableWithoutFeedback } from 'react-native';
import { Item, ModalProps } from '@/types/types';
import { GlobalStyles } from '@/constants/styles';
import { RootState, useAppDispatch } from '@/store/store';
import { useSelector } from 'react-redux';
import CardsList from './CardsList';
import { itemsData } from '@/data/data';

const ModalWindow: React.FC<ModalProps> = ({ handleModal, modalVisible }) => {
  const [favorites, setFavorites] = useState<Item[]>([]);

  const closeModal = () => {
    handleModal(!modalVisible);
  };

  const favoritesArray = useSelector((state: RootState) => state.favorites);
  const fav: any[] = [];

  useEffect(() => {
    favoritesArray.forEach(element => {
      fav.push(itemsData.find(item => item.id === element));
    });
    setFavorites(fav);
  }, [favoritesArray]);

  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          closeModal();
        }}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Your favorites</Text>
              <CardsList items={favorites} refreshing={false} handleRefresh={() => {}} onPressItem={() => {}} />
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => handleModal(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.secondaryTextColor,
    opacity: 0.9,
  },
  modalView: {
    backgroundColor: GlobalStyles.colors.lightAccentColor,

    padding: 10,
    alignItems: 'center',
    opacity: 1,
    borderRadius: 12,
    shadowColor: GlobalStyles.colors.mainTextColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 12,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: GlobalStyles.colors.accentColor,
  },
  textStyle: {
    color: GlobalStyles.colors.mainTextColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: GlobalStyles.colors.accentColor,
  },
});

export default ModalWindow;
