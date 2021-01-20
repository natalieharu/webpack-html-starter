const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const postcssShortSize = require('postcss-short-size');
const postcssHexRgba = require('postcss-hexrgba');
const tailwind = require('tailwindcss');

const isProd = process.env.MODE === 'production';

module.exports = {
    plugins: [
        tailwind(),
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