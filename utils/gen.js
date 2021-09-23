// Package Imports
const jsonToTable = require('json-to-table');
const markdownTable = require('markdown-table');

// Import json array
const apps = require('../src/apps.json');

// Convert json to table
const appsTabled = jsonToTable(apps);

// Convert table to markdown
const appsMarkdown = markdownTable(appsTabled, { align: ['c', 'c', 'l'] })

console.log(appsMarkdown);