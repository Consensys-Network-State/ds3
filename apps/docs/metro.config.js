const { getDefaultConfig } = require('expo/metro-config');
const { withDs3Workspace } = require('@consensys/ui-config/metro');

const config = getDefaultConfig(__dirname);

module.exports = withDs3Workspace(config);