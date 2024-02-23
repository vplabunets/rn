import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Platform, Button } from 'react-native';

import { GlobalStyles } from '@/constants/styles';

import Star from '../../UI/Star';

import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/types';
import { useSelector } from 'react-redux';
import { addProduct } from '@/store/cart/cartReducer';
import { RootState, useAppDispatch } from '@/store/store';
import { convertToUSD } from '@/helpers';
import { addToFavorites, removeFromFavorites } from '@/store/favorites/favoritesSlice';

type CakeInfoNavigationProp = NavigationProp<RootStackParamList, 'CakeInfo'>;
type CakeInfoRouteProp = RouteProp<RootStackParamList, 'CakeInfo'>;

type CakeInfoProps = {
  navigation: CakeInfoNavigationProp;
  route: CakeInfoRouteProp;
};

const CakeInfo: React.FC<CakeInfoProps> = ({ navigation, route }) => {
  const { feature, url, rating, title, price, fullDescription, id, composition } = route.params.item;
  const [favorites, setFavorites] = useState<number[]>([]);
  const favoritesArray = useSelector((state: RootState) => state.favorites);
  const dispatch = useAppDispatch();

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
        <Text style={styles.description}>{fullDescription}</Text>
      </View>
      <View style={styles.compositionPriceContainer}>
        <View style={styles.compositionContainer}>
          <Text>{composition}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{convertToUSD(price)}</Text>
          <Button
            color={GlobalStyles.colors.accentColor}
            onPress={() => handleAddToCart()}
            title="Add to Chart"
          ></Button>
          <Button color={GlobalStyles.colors.accentColor} title="go back"></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.bgcolorCard,
    flex: 1,
    flexShrink: 0,
    padding: 16,
    elevation: 10,
    shadowColor: GlobalStyles.colors.accentColor,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  imageContainer: {
    height: 340,
  },
  image: {
    flex: 1,
    borderRadius: 12,
  },
  ratingContainer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    height: 36,
    width: 90,
    padding: 4,
    backgroundColor: GlobalStyles.colors.lightBackgroundColor,
    opacity: 0.9,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  ratingTextContainer: {},
  ratingText: {
    alignItems: 'center',
    color: GlobalStyles.colors.accentColor,
    fontSize: 18,
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
    height: 36,
    width: 90,
    backgroundColor: GlobalStyles.colors.lightBackgroundColor,
    opacity: 0.9,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
  },

  descriptionContainer: {
    width: '100%',
    marginBottom: 8,
  },
  title: {
    color: GlobalStyles.colors.mainTextColor,
    fontSize: 36,
    fontWeight: '600',
  },
  description: {
    color: GlobalStyles.colors.secondaryTextColor,
    fontSize: 16,
    fontWeight: '400',
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 11,
  },
  price: {
    color: GlobalStyles.colors.priceColor,
    fontSize: 18,
    fontWeight: '600',
  },
  compositionPriceContainer: {
    flex: 1,
  },
  compositionContainer: {
    marginBottom: 8,
  },
});

export default CakeInfo;
