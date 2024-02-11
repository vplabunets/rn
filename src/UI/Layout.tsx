import React, { ReactNode } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={require('../../assets/bean.png')}>
        {children}
      </ImageBackground>
    </View>
  );
}

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    width: '100%',
  },
});
