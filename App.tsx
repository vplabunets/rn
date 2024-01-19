import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MainScreen from '@/screens/MainScreen';

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
});
