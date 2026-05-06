// LightningCSS (Vite 8 default) rejects selectors where ::file-selector-button
// is followed by a pseudo-class or combinator. Skeleton generates several of
// these (e.g. ::file-selector-button:disabled, ::file-selector-button > ...).
// Strip any rule with that pattern before it reaches the minifier.
const stripFileButtonChained = () => ({
	postcssPlugin: 'strip-file-selector-chained',
	Rule(rule) {
		if (/::file-selector-button\s*[:>~+]/.test(rule.selector ?? '')) {
			rule.remove();
		}
	}
});
stripFileButtonChained.postcss = true;

module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		stripFileButtonChained,
	]
};
