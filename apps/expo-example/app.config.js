import ds3Config from './ds3.config';

module.exports = ({ config }) => {
  return {
    ...config,
    extra: {
      DS3: ds3Config
    }
  };
};