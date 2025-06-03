import withDs3 from '@consensys/ds3-config/expo';
import themeConfig from './theme.config';

module.exports = ({ config }) => {
  return withDs3(config, themeConfig);
};