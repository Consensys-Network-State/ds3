const { getDefaultConfig } = require('expo/metro-config');
const { withDs3Workspace } = require('@consensys/ds3-config/metro');

const config = getDefaultConfig(__dirname);

module.exports = withDs3Workspace(config);