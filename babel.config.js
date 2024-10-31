module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      "react-native-reanimated/plugin" // keep this the last plugin
    ],
  };
};
