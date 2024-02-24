import 'ts-node/register';
import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'rn',
  slug: 'rn',
  version: '1.0.0',
  orientation: 'default',
  icon: './src/assets/coffee-icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './src/assets/coffee-cup.png',
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
    package: 'com.vplabunets.rn',
    adaptiveIcon: {
      foregroundImage: './src/assets/coffee-cup.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './src/assets/bean.png',
  },
  experiments: {
    tsconfigPaths: true,
  },
  extra: {
    eas: {
      projectId: '1e53cfd9-9ae7-407f-a946-6abed4ab6d1d',
    },
  },
};

export default config;
