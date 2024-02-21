import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, Text, Pressable, Platform } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import Star from '../UI/Star';
import IconButton from '@/UI/IconButton';

import { Item } from '@/types/types';
import { RootState } from '@/redux/store';

import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '@/redux/cart/cartReducer';
import { addToFavorites, removeFromFavorites } from '@/redux/favorites/favoritesSlice';
import { convertToUSD } from '@/helpers';

function PressableCard({ item, onPress }: { item: Item; onPress: (xxx: Item) => void }): React.JSX.Element {
  const [favorites, setFavorites] = useState<number[]>([]);

  const favoritesArray = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();
  const { title, description, price, rating, url, feature, id } = item;

  useEffect(() => {
    setFavorites(favoritesArray);
  }, [favoritesArray]);

  function handleIsFavorite(productId: number) {
    if (favorites.includes(productId)) {
      dispatch(removeFromFavorites(productId));
    } else {
      dispatch(addToFavorites(productId));
    }
  }

  function handleAddToCart() {
    dispatch(addProduct({ productId: id, quantity: 1 }));
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        android_ripple={styles.ripple}
        onPress={() => onPress(item)}
      >
        <View style={styles.imageContainer}>
          <View style={styles.ratingContainer}>
            <View>
              <Star onPress={() => handleIsFavorite(id)} isFavorite={favorites.includes(id)} />
            </View>
            <View style={styles.ratingTextContainer}>
              <Text style={styles.ratingText}>{rating}</Text>
            </View>
          </View>
          {feature === 'new' && (
            <View style={styles.featureContainer}>
              <Text style={styles.ratingText}>{feature}</Text>
            </View>
          )}

          <Image
            style={styles.image}
            source={{
              uri: url,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{convertToUSD(price)}</Text>
          <IconButton icon="cart-outline" color={GlobalStyles.colors.accentColor} onPress={() => handleAddToCart()} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.bgcolorCard,
    height: 238,
    width: 160,
    flexShrink: 0,
    borderRadius: 16,
    margin: 8,
    elevation: 10,
    shadowColor: GlobalStyles.colors.accentColor,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  ripple: {
    color: GlobalStyles.colors.lightAccentColor,
  },
  imageContainer: {
    marginTop: 10,
    marginBottom: 6,
    marginLeft: 10,
    width: 140,
    height: 130,
  },
  image: {
    flex: 1,
    borderRadius: 12,
  },
  ratingContainer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 10,
    height: 24,
    width: 60,
    padding: 4,
    backgroundColor: GlobalStyles.colors.lightBackgroundColor,
    opacity: 0.9,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  ratingTextContainer: {
    marginLeft: 8,
  },
  ratingText: {
    alignItems: 'center',
    color: GlobalStyles.colors.accentColor,
    fontSize: 13,
    fontWeight: 'bold',
    zIndex: 20,
  },
  featureContainer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    zIndex: 10,
    height: 24,
    width: 60,
    backgroundColor: GlobalStyles.colors.lightBackgroundColor,
    opacity: 0.9,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
  },

  descriptionContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 11,
    marginBottom: 20,
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

export default PressableCard;
