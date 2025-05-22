module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['@consensys/ui-config/expo/babel'],
  };
};