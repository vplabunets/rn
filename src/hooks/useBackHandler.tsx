import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const useBackHandler = (callback: () => {}) => {
  useEffect(() => {
    const handleBackPress = () => {
      callback();
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [callback]);
};

export default useBackHandler;
