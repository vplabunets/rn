import React from 'react';
import { FlatList } from 'react-native';
import PressableCard from './PressableCard';
import { Item } from '@/types/types';

const renderItem = ({ item }: { item: Item }) => <PressableCard item={item} />;

function CardsList({
  items,
  refreshing,
  handleRefresh,
}: {
  items: Item[];
  refreshing: boolean;
  handleRefresh: () => void;
}): React.JSX.Element {
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item: Item) => item.id.toString()}
      numColumns={2}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      onEndReached={handleRefresh}
      onEndReachedThreshold={0.1}
    ></FlatList>
  );
}

export default CardsList;
