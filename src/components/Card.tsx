import React, { useState } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { ItemData } from '../data/data';
import Star from '../UI/Star';
import Button from '../UI/Button';

const { title, price, description, rating } = ItemData;

function convertToUSD(initialNumber: number) {
  return initialNumber.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

function Card(): React.JSX.Element {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.ratingContainer}>
          <View>
            <Star
              onPress={() => setIsFavorite(!isFavorite)}
              isFavorite={isFavorite}
            />
          </View>
          <View style={styles.ratingTextContainer}>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
        <Image
          // style={styles.image}
          source={require('../assets/capuchino.png')}
          resizeMode="cover"
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{convertToUSD(price)}</Text>
        <Button onPress={() => console.log('Hello')}>+</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.bgcolorCard,
    height: 238,
    width: 155,
    flexShrink: 0,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 10,
    shadowColor: GlobalStyles.colors.accentColor,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  imageContainer: {
    marginTop: 5,
    marginBottom: 6,
    width: 141,
    height: 132,
  },
  ratingContainer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 10,
    height: 36,
    width: 65,
    padding: 10,
  },
  ratingTextContainer: {
    marginLeft: 8,
  },
  ratingText: {
    alignItems: 'center',
    color: GlobalStyles.colors.whiteTextColor,
    fontSize: 13,
    fontWeight: '600',
    zIndex: 20,
  },
  descriptionContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 11,
    marginBottom: 14,
  },
  title: {
    color: GlobalStyles.colors.mainTextColor,
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    color: GlobalStyles.colors.secondaryTextColor,
    fontSize: 12,
    fontWeight: '400',
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 11,
    marginBottom: 14,
  },
  price: {
    color: GlobalStyles.colors.priceColor,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Card;
