import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Dimensions, NativeSyntheticEvent, NativeScrollEvent, Animated } from 'react-native';

import SlideItem from '@/components/Slider/SlideItem';
import SliderPagination from '@/components/Slider/SliderPagination';

import { SliderProps, SlideData } from '@/types/types';

const renderSlide = ({ id, image }: SlideData) => {
  return <SlideItem image={image} id={id} />;
};

const Slider: React.FC<SliderProps> = ({ promo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const scrollX = useRef(new Animated.Value(0)).current;

  const flatListRef = useRef<FlatList<{ id: number; image: string }>>(null);
  const slideWidth = Dimensions.get('window').width;

  useEffect(() => {
    let interval = setInterval(() => {
      if (currentIndex === promo.length - 1) {
        flatListRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatListRef.current?.scrollToIndex({
          index: currentIndex + 1,
          animated: true,
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  const getItemLayout: (data: any, index: number) => any = (data, index) => {
    return { length: slideWidth, offset: slideWidth * index, index: index };
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = event.nativeEvent.contentOffset.x / slideWidth;
    setCurrentIndex(newIndex);
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };
  return (
    <>
      <FlatList
        data={promo}
        ref={flatListRef}
        getItemLayout={getItemLayout}
        bounces={false}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        keyExtractor={(_, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => renderSlide(item)}
        onScroll={handleScroll}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
      <SliderPagination promo={promo} scrollX={scrollX} currentIndex={currentIndex} />
    </>
  );
};
export default Slider;
