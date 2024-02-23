import 'ts-node/register';
import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'rn',
  slug: 'rn',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/coffee-cup.png',
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
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  experiments: {
    tsconfigPaths: true,
  },
};

export default config;
