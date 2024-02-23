import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@/screens/Home';
import RegistrationScreen from '@/screens/auth/RegistrationScreen';
import LoginScreen from '@/screens/auth/LoginScreen';
import { screenOptions } from '@/screens/auth/screenOptions.config';

const AuthStack = createNativeStackNavigator();

export const useRoute = (isAuth: boolean) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="LoginScreen">
        <AuthStack.Screen options={screenOptions} name="Login" component={LoginScreen} />
        <AuthStack.Screen options={screenOptions} name="Registration" component={RegistrationScreen} />
      </AuthStack.Navigator>
    );
  }
  return (
    <AuthStack.Navigator initialRouteName="LoginScreen">
      <AuthStack.Screen options={screenOptions} name="Home" component={Home} />
    </AuthStack.Navigator>
  );
};
