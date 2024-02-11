import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@/screens/Home';
import RegistrationScreen from '@/screens/auth/RegistrationScreen';
import LoginScreen from '@/screens/auth/LoginScreen';

const AuthStack = createNativeStackNavigator();

export const useRoute = (isAuth: boolean) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="LoginScreen">
        <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <AuthStack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationScreen} />
      </AuthStack.Navigator>
    );
  }
  return (
    <AuthStack.Navigator initialRouteName="LoginScreen">
      <AuthStack.Screen options={{ headerShown: false }} name="Home" component={Home} />
    </AuthStack.Navigator>
  );
};

export const styles = StyleSheet.create({});
