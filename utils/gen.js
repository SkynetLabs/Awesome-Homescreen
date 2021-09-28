// Package Imports
const jsonToTable = require('json-to-table');
const markdownTable = require('markdown-table');

// Import json array
const apps = require('../src/apps.json');

// Build New Object
let appsForMarkdown = [];
let addToHomescreen = "[![Add to Homescreen](https://siasky.net/CADKZ7bTyVRjMmyMnEsUKDidqdmdaNHaJP25cp_3YGQlkg)](https://homescreen.hns.siasky.net/#/skylink/"
apps.forEach((app) => {
    // Build fields
    let jsonData = {}
    jsonData['Application'] = "[" + app.applicationName + "](" + app.repoLink + ")";
    jsonData['Add To Homescreen'] = addToHomescreen + app.resolverSkylink + ")";
    jsonData['Description'] = app.description;
    appsForMarkdown.push(jsonData);
})

// Convert json to table
const appsTabled = jsonToTable(appsForMarkdown);

// Convert table to markdown
const appsMarkdown = markdownTable(appsTabled, { align: ['c', 'c', 'l'] })

console.log(appsMarkdown);