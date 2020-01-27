module.exports = (api) => {
  api.cache(false);

  const presets = ['@babel/preset-react'];
  const plugins = ['@loadable/babel-plugin'];

  const envOptions = {
    modules: false,
  };

  presets.push(['@babel/preset-env', envOptions]);

  return {
    presets,
    plugins,
  };
};
