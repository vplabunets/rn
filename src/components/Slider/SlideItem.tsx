import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

interface SlideItemProps {
  id: number;
  image: any;
}

const SlideItem: React.FC<SlideItemProps> = ({ id, image }) => {
  return (
    <View key={id} style={styles.slide}>
      <Image resizeMode="stretch" source={image} style={styles.image} />
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: Dimensions.get('window').width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
