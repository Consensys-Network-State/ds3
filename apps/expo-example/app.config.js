import withCui from '@consensys/ui-config/expo';
import themeConfig from './theme.config';

module.exports = ({ config }) => {
  return withCui(config, themeConfig);
};