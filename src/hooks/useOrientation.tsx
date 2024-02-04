import { Dimensions } from 'react-native';

export const useOrientation: any = () => {
  const width = Dimensions.get('window').width;

  const height = Dimensions.get('window').height;

  return width < height ? 'portrait' : 'landscape';
};
