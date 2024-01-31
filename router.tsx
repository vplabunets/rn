import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

export const useRoute = (isAuth: boolean) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="LoginScreen">
        <AuthStack.Screen options={{ headerShown: false }} name="RegScreen" component={TeaScreen} />
        <AuthStack.Screen options={{ headerShown: false }} name="LogScreen" component={SettingsScreen} />
      </AuthStack.Navigator>
    );
  }
  return (
    <AuthStack.Navigator initialRouteName="LoginScreen">
      <AuthStack.Screen options={{ headerShown: false }} name="Home" component={Home} />
    </AuthStack.Navigator>
  );
};

import { StyleSheet } from 'react-native';
import Home from '@/screens/Home';
import TeaScreen from '@/screens/BottomNavigatorScreen/TopNavigator/TeaScreen';
import SettingsScreen from '@/screens/BottomNavigatorScreen/SettingsScreen';

export const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    backgroundColor: 'black',
    margin: 0,
    padding: 0,
  },
});
