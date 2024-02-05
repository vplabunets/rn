import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useRoute } from '@/types/routing';

export const Main = () => {
  const routing = useRoute(true);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
