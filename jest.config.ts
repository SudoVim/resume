const createJestConfig = require('react-scripts/scripts/utils/createJestConfig');
const path = require('path');
const paths = require('react-scripts/config/paths');

const reactConfig = createJestConfig(
  (relativePath: string): string => path.resolve('node_modules/react-scripts', relativePath),
  path.resolve(paths.appSrc, '..'),
  false
);
const config = {
  ...reactConfig,
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\](?!(random)/).+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};

export default config;
