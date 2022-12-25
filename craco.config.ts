const sassResourcesLoader = require('craco-sass-resources-loader');
const CracoAlias = require("craco-alias");

module.exports = {
	reactScriptsVersion: "react-scripts" /* (default value) */,
	plugins: [
		{
      plugin: CracoAlias,
      options: {
				baseUrl: "./",
        aliases: {
					'@': './src',
				}
      }
    },
    {
      plugin: sassResourcesLoader,
      options: {
        //resources: './src/assets/scss/import.scss',
      },
    },
  ],
}