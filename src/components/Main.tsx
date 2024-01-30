import React from 'react';

import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useRoute } from '../router';

export const Main = () => {
  const { stateChange } = useSelector(state => state.auth);

  const rounting = useRoute(stateChange);

  return <NavigationContainer>{rounting}</NavigationContainer>;
};
