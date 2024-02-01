import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from 'router';

export const Main = () => {
  const rounting = useRoute(true);

  return <NavigationContainer>{rounting}</NavigationContainer>;
};
