import Slider from '@/components/Slider/Slider';
import { promo } from '@/data/data';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const PromotionsScreen = () => {
  return (
    <View style={styles.container}>
      <Slider promo={promo} />
    </View>
  );
};

export default PromotionsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
