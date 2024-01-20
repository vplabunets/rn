import { GlobalStyles } from '@/constants/styles';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface StarProps {
  onPress: () => void;
  isFavorite: boolean;
}

const Star: React.FC<StarProps> = ({ onPress, isFavorite }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <Path
            id="Vector"
            d="M8.00917 2.0475L9.03584 4.10083C9.17584 4.38667 9.54917 4.66083 9.86417 4.71333L11.725 5.0225C12.915 5.22083 13.195 6.08417 12.3375 6.93583L10.8908 8.3825C10.6458 8.6275 10.5117 9.1 10.5875 9.43833L11.0017 11.2292C11.3283 12.6467 10.5758 13.195 9.32167 12.4542L7.57751 11.4217C7.26251 11.235 6.74334 11.235 6.42251 11.4217L4.67834 12.4542C3.43001 13.195 2.67167 12.6408 2.99834 11.2292L3.41251 9.43833C3.48834 9.1 3.35417 8.6275 3.10917 8.3825L1.66251 6.93583C0.810841 6.08417 1.08501 5.22083 2.27501 5.0225L4.13584 4.71333C4.44501 4.66083 4.81834 4.38667 4.95834 4.10083L5.98501 2.0475C6.54501 0.933333 7.45501 0.933333 8.00917 2.0475Z"
            fill={isFavorite ? GlobalStyles.colors.accentColor : '#ffffff'}
            stroke={GlobalStyles.colors.accentColor}
          />
        </Svg>
      </View>
    </Pressable>
  );
};

export default Star;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
