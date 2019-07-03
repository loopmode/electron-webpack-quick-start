const path = require("path");

module.exports = config => {
  config.resolve.alias["@static"] = path.resolve(__dirname, "static");
  return config;
};
