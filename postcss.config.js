const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const postcssShortSize = require('postcss-short-size');
const postcssHexRgba = require('postcss-hexrgba'); 

const isProd = process.env.MODE === 'production';

module.exports = {
    plugins: [
        isProd
			? cssnano({ preset: 'default' })
			: null,
		isProd
			? autoprefixer()
			: null,
        postcssShortSize(),
        postcssHexRgba(),
    ],
};