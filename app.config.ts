import 'ts-node/register'; // Add this to import TypeScript files
import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'rn',
  slug: 'rn',
  version: '1.0.0',
  orientation: 'portrait',
  icon: '/assets/coffee-bean-icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: '/assets/coffee-bean-icon.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  jsEngine: 'hermes',
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    jsEngine: 'jsc',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: '/assets/coffee-bean-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: '/assets/coffee-bean-icon.png',
  },
  experiments: {
    tsconfigPaths: true,
  },
};

export default config;