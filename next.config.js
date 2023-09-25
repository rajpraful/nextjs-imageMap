const path = require("path")
const withSass = require("@zeit/next-sass")
module.exports = withSass({
  cssModules: true,
})
module.exports = {
  /* Add Your Scss File Folder Path Here */
  assetPrefix: '.',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
}
