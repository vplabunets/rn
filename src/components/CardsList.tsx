import React from 'react';
import { FlatList } from 'react-native';
import PressableCard from './PressableCard';
import { Item } from '@/types/types';

function CardsList({ items }: { items: Item[] }): React.JSX.Element {
  return (
    <FlatList
      data={items}
      renderItem={({ item }: { item: Item }) => <PressableCard item={item} />}
      keyExtractor={(item: Item) => item.id.toString()}
      numColumns={2}
    ></FlatList>
  );
}

export default CardsList;
