// Babel отвечает за поддержку функцй из нового js в старых версиях Js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
