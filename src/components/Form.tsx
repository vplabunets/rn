import React, { useEffect, useState } from 'react';
import Checkbox from 'expo-checkbox';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import IconButton from '@/UI/IconButton';
import { GlobalStyles } from '@/constants/styles';
import { FormProps } from '@/types/types';

const Form: React.FC<FormProps> = ({
  handleModal,
  modalVisible,
  handleFilteredItems,
}) => {
  const [text, onChangeText] = useState('');
  const [isShownInput, setIsShownInput] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    handleFilteredItems(text, isChecked);
  }, [text, isChecked]);
  function handleModalVisible() {
    handleModal(!modalVisible);
  }

  function handleIsChecked() {
    setIsChecked(!isChecked);
  }

  function handleIsShownInput() {
    setIsShownInput(!isShownInput);
  }
  return (
    <View style={styles.formContainer}>
      {isShownInput && (
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search..."
          />
          <View style={styles.checkboxContainer}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={handleIsChecked}
              color={
                isChecked
                  ? GlobalStyles.colors.accentColor
                  : GlobalStyles.colors.lightAccentColor
              }
            />
            <Text style={styles.paragraph}>New only</Text>
          </View>
        </View>
      )}
      <View style={styles.buttonsContainer}>
        <IconButton
          icon="heart"
          color={GlobalStyles.colors.accentColor}
          onPress={handleModalVisible}
        />

        <IconButton
          icon="search-sharp"
          onPress={handleIsShownInput}
          color={GlobalStyles.colors.mainTextColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    paddingVertical: 4,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    padding: 12,
    color: GlobalStyles.colors.mainTextColor,
    borderColor: GlobalStyles.colors.accentColor,
    borderWidth: 2,
    borderRadius: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 32,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 12,
  },
  checkbox: {
    margin: 10,
  },
});

export default Form;
