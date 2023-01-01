// 11ty Plugins
const pluginRss = require("@11ty/eleventy-plugin-rss");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const i18n = require('eleventy-plugin-i18n');
const translations = require('./src/_data/i18n');
const util = require('util');

// Helper packages
const slugify = require("slugify");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

// Local utilities/data
const packageVersion = require("./package.json").version;

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.addWatchTarget("./src/sass/");
	eleventyConfig.addWatchTarget("./src/scripts/");

	eleventyConfig.addPassthroughCopy("./src/scripts");
	eleventyConfig.addPassthroughCopy("./src/css");
	eleventyConfig.addPassthroughCopy("./src/fonts");
	eleventyConfig.addPassthroughCopy("./src/img");
	eleventyConfig.addPassthroughCopy("./src/favicon.png");

	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
	eleventyConfig.addShortcode("packageVersion", () => `v${packageVersion}`);

    // eleventyConfig.addPlugin(i18n, {
    //     translations,
    //     defaultLanguage: "he-IL",
    //     fallbackLocales: {
    //         'en-US': 'he-IL'
    //     }
    // });

    eleventyConfig.addCollection("pages_he", function (collection) {
        return collection.getFilteredByGlob("./src/pages/*.njk");
    });

    eleventyConfig.addCollection("pages_en", function (collection) {
        return collection.getFilteredByGlob("./src/en/pages/*.njk");
    });

	eleventyConfig.addFilter("slug", (str) => {
		if (!str) {
			return;
		}

		return slugify(str, {
			lower: true,
			strict: true,
			remove: /["]/g
		});
	});

    eleventyConfig.addFilter('console', function(value) {
        return util.inspect(value);
    });

/* Markdown Overrides */
	let markdownLibrary = markdownIt({
		html: true
	}).use(markdownItAnchor, {
		permalink: markdownItAnchor.permalink.ariaHidden({
			class: "tdbc-anchor",
			space: false
		}),
		level: [1, 2, 3],
		slugify: (str) =>
			slugify(str, {
				lower: true,
				strict: true,
				remove: /["]/g
			})
	});
	eleventyConfig.setLibrary("md", markdownLibrary);

	return {
		passthroughFileCopy: true,
		dir: {
			input: "src",
			output: "public",
			layouts: "_layouts"
		}
	};
};
