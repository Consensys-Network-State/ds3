module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['@consensys/ds3-config/expo/babel'],
  };
};