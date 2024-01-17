import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Card from './src/components/Card';

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Card />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
