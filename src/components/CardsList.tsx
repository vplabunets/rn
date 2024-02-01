import React from 'react';
import { FlatList } from 'react-native';
import PressableCard from './PressableCard';
import { Item } from '@/types/types';

const renderItem = ({ item, onPress }: { item: Item; onPress: () => void }) => (
  <PressableCard item={item} onPress={onPress} />
);

function CardsList({
  items,
  refreshing,
  handleRefresh,
  onPressItem,
}: {
  items: Item[];
  refreshing: boolean;
  handleRefresh: () => void;
  onPressItem: (item: Item) => void;
}): React.JSX.Element {
  const handlePressItem = (item: Item) => {
    onPressItem(item);
  };

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => renderItem({ item, onPress: () => handlePressItem(item) })}
      keyExtractor={(item: Item) => item.id.toString()}
      numColumns={2}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      onEndReached={handleRefresh}
      onEndReachedThreshold={0.1}
    />
  );
}

export default CardsList;
