import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useRoute } from 'router';
import { useSelector } from 'react-redux';
import { stateChange } from '@/store/auth/authSelector';
import { authStateChangeUser } from '@/store/auth/authOperations';
import { useAppDispatch } from '@/store/store';

export const Main = () => {
  const dispatch = useAppDispatch();

  const isLoggedin = useSelector(stateChange);
  const routing = useRoute(isLoggedin);

  useEffect(() => {
    dispatch<any>(authStateChangeUser());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};
