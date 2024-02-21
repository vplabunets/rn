import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { NavigationProp } from '@react-navigation/native';

import { GlobalStyles } from '@/constants/styles';
import Layout from '@/UI/Layout';
import { authSignInUser } from '@/redux/auth/authOperations';

interface RegistrationScreenProps {
  navigation: NavigationProp<any>;
}

const initialState = { email: '', password: '' };
function LoginScreen({ navigation }: RegistrationScreenProps) {
  const [isShown, setIsShown] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

  function handleIsShown() {
    setIsShown(!isShown);
  }

  function keyboardHide() {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  function handleSubmitForm() {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    //@ts-ignore
    dispatch(authSignInUser({ email: user.email, password: user.password }));
    setUser(initialState);
  }

  return (
    <Layout>
      <TouchableWithoutFeedback style={{ width: '100%' }} onPress={keyboardHide}>
        <KeyboardAvoidingView
          style={{ width: '100%', height: '100%' }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View
            style={{
              ...styles.form,
              marginTop: isShowKeyboard ? 100 : 236,
            }}
          >
            <Text style={styles.title}>Login</Text>
            <TextInput
              style={{ marginBottom: 20, ...styles.input }}
              placeholder="Email"
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              value={user.email}
              onChangeText={value => setUser(prevValue => ({ ...prevValue, email: value }))}
            />
            <View>
              <TextInput
                style={{ marginBottom: 43, ...styles.input }}
                placeholder="Password"
                secureTextEntry={!isShown}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                value={user.password}
                onChangeText={value => setUser(prevValue => ({ ...prevValue, password: value }))}
              />
              <TouchableOpacity activeOpacity={0.8} style={styles.showButton} onPress={handleIsShown}>
                <Text style={styles.showButtonText}>{isShown ? 'Hide' : 'Show'}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={handleSubmitForm}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <View style={styles.toRegistrationContainer}>
              <Text style={styles.toRegistrationContainerText}>Don't have an account? </Text>
              <TouchableOpacity style={styles.toRegistrationButton} onPress={() => navigation.navigate('Registration')}>
                <Text style={styles.toRegistrationButtonText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Layout>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    marginTop: 263,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: GlobalStyles.colors.background,
    width: '100%',
    height: '100%',
    borderTopStartRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    textAlign: 'center',
    color: GlobalStyles.colors.mainTextColor,
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 33,
  },
  input: {
    padding: 16,
    width: '100%',
    height: 50,
    backgroundColor: GlobalStyles.colors.backgroundGrey,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.inputBorderColor,
  },
  showButton: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  showButtonText: {
    fontSize: 16,
    color: GlobalStyles.colors.accentColor,
  },
  button: {
    marginBottom: 16,
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 5,
    backgroundColor: GlobalStyles.colors.accentColor,
  },
  buttonText: {
    color: GlobalStyles.colors.whiteTextColor,
    textAlign: 'center',
    fontSize: 16,
  },
  toRegistrationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toRegistrationContainerText: {
    color: GlobalStyles.colors.lightAccentColor,
    fontSize: 16,
  },
  toRegistrationButton: {},
  toRegistrationButtonText: {
    color: GlobalStyles.colors.accentColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
