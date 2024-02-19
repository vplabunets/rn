import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useRoute } from 'router';
import { useDispatch, useSelector } from 'react-redux';
import { stateChange } from '@/redux/auth/authSelector';
import { authStateChangeUser } from '@/redux/auth/authOperations';

export const Main = () => {
  const dispatch = useDispatch();

  const isLoggedin = useSelector(stateChange);
  const routing = useRoute(isLoggedin);

  useEffect(() => {
    dispatch<any>(authStateChangeUser());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
