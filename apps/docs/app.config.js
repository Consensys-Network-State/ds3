import withDs3 from '@ds3/config/expo';
import ds3Config from './ds3.config';

module.exports = ({ config }) => {
  return withDs3({ config, ds3Config });
};