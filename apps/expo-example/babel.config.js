module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['@ds3/core/expo/babel'],
  };
};