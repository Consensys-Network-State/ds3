const { getDefaultConfig } = require('expo/metro-config');
const { withCuiWorkspace } = require('@consensys/ui-config/metro');

const config = getDefaultConfig(__dirname);

module.exports = withCuiWorkspace(config);
