import React from 'react';
import { View, StyleSheet } from 'react-native';

import { promo } from '@/data/data';

import Slider from '@/components/Slider/Slider';

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
