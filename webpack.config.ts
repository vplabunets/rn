import createExpoWebpackConfigAsync from '@expo/webpack-config/webpack';
import { Arguments, Environment } from '@expo/webpack-config/webpack/types';

module.exports = async function (env: Environment, argv: Arguments) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.

  if (config.resolve?.alias) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/*': './src/*',
      '@/api': './src/api',
      '@/assets': './src/assets',
      '@/components': './src/components',
      '@/constants': './src/constants',
      '@/data': './src/data',
      '@/navigation': './src/navigation',
      '@/screens': './src/screens',
      '@/UI': './src/UI',
      '@/utils': './src/utils',
    };
  }
  return config;
};
