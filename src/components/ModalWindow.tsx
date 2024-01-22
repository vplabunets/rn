import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { ModalProps } from '@/types/types';
import { GlobalStyles } from '@/constants/styles';

const ModalWindow: React.FC<ModalProps> = ({ handleModal, modalVisible }) => {
  const closeModal = () => {
    handleModal(!modalVisible);
  };

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
              <Text style={styles.modalText}>
                Here should be some interesting information
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => handleModal(!modalVisible)}
              >
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.secondaryTextColor,
    opacity: 0.9,
  },
  modalView: {
    backgroundColor: GlobalStyles.colors.lightAccentColor,
    padding: 35,
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
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalWindow;
