function configuration(api) {
	api.cache(true);

	const presets = ['@babel/preset-env', '@babel/preset-react'];
	const plugins = ['macros'];

	return {
		presets,
		plugins,
	};
}

module.exports = configuration;
