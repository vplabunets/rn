import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { GlobalStyles } from '../constants/styles';

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 32,
    width: 32,
    // padding: 8,
    backgroundColor: GlobalStyles.colors.accentColor,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    borderRadius: 10,
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: GlobalStyles.colors.whiteTextColor,
  },
});
