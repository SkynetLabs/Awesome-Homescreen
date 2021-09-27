// Package Imports
const jsonToTable = require('json-to-table');
const markdownTable = require('markdown-table');

// Import json array
const apps = require('../src/apps.json');

// Build New Object
let appsForMarkdown = [];
apps.forEach(() => {
    // Build fields
    let jsonData = {}
    jsonData['New Field'] = "testing";
    appsForMarkdown.push(jsonData);
})

// Convert json to table
const appsTabled = jsonToTable(appsForMarkdown);

// Convert table to markdown
const appsMarkdown = markdownTable(appsTabled, { align: ['c', 'c', 'l'] })

console.log(appsMarkdown);