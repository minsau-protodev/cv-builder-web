module.exports = {
	transform: {
		'\\.(js|jsx)$': 'babel-jest',
		'\\.(jpg|jpeg|png|svg)$': '<rootDir>/fileMock.js',
	},
	moduleNameMapper: {
		'^.+\\.(css|less|scss)$': 'identity-obj-proxy',
	},
};
