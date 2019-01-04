const fs = require("fs");
const path = require("path");
const favicons = require("favicons");
const paths = require("../config/paths");

const source = "favicon.png";

const config = {
  path: process.env.PUBLIC_URL,
  appName: "robdonn",
  appDescription: "Personal website for Robert Donnelly",
  developerName: "Robert Donnelly",
  developerURL: "https://robdonn.github.io",
  lang: "en-GB",
  theme_color: "#282c34"
};

const handleFiles = ({ name, contents }) => {
  const filePath = path.join(paths.appBuild, name);
  fs.writeFileSync(filePath, contents);
  console.log("File written:", filePath);
};

favicons(source, config, (error, response) => {
  if (error) {
    console.error(error);
    return;
  }

  response.images.forEach(handleFiles);
  response.files.forEach(handleFiles);
});
