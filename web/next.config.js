const path = require("path");

module.exports = {
  turbopack: {
    // Allow resolving hoisted workspace dependencies from the monorepo root.
    root: path.join(__dirname, ".."),
  },
  reactStrictMode: true,
};
