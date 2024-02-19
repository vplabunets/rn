import React from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';

import { GlobalStyles } from '@/constants/styles';

const { width } = Dimensions.get('screen');
interface SliderPaginationProps {
  promo: { id: number; image: any }[];
  scrollX: any;
  currentIndex: number;
}
const SliderPagination: React.FC<SliderPaginationProps> = ({ promo, scrollX, currentIndex }) => {
  return (
    <View style={styles.pagination}>
      {promo.map((_, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={index.toString()}
            style={[styles.paginationDot, { width: dotWidth }, currentIndex === index && styles.activeDot]}
          />
        );
      })}
    </View>
  );
};

export default SliderPagination;

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
    backgroundColor: GlobalStyles.colors.lightAccentColor,
  },
  activeDot: {
    backgroundColor: GlobalStyles.colors.accentColor,
  },
});
