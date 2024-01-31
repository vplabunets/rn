import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from 'router';

export const Main: React.FC = () => {
  const rounting = useRoute(true);

  return <NavigationContainer>{rounting}</NavigationContainer>;
};
