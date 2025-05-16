const { getDefaultConfig } = require('expo/metro-config');
const { withDs3Workspace } = require('@ds3/core/metro');

const config = getDefaultConfig(__dirname);

module.exports = withDs3Workspace(config);