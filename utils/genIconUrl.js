// Package Imports for IconURL
const got = require("got");
const jsdom = require("jsdom");
const lodash = require("lodash");

// Import json array
const apps = require("../src/apps.json");

// Build IconUrls
let newApps = [];
apps.forEach(async (app) => {
  // Build Icon URLs
  let jsonData = app;
  if (!jsonData["iconPath"]) {
    try {
      const iconPath = await getIconUrl(app.resolverSkylink);
      jsonData["iconPath"] = iconPath;
    } catch (error) {
      return;
    }
  }
  newApps.push(jsonData);

  // When we have gone through all the apps, log the result
  if (newApps.length == apps.length) {
    console.log(
      JSON.stringify(
        lodash.sortBy(newApps, function (app) {
          return app.applicationName;
        })
      )
    );
  }
});

// getIconUrl pulls the app's icon url from the manifest.
async function getIconUrl(skylink) {
  const portal = "https://siasky.net/";
  try {
    // Download the skylink
    const skylinkUrl = portal + skylink;
    const response = await got(skylinkUrl, {
      followRedirect: true,
      headers: { cookie: "nocache=true" },
    });

    // Only perform iconUrl lookup for text/html content types
    const contentType = response.headers["content-type"];
    if (contentType !== "text/html") {
      return;
    }

    // Grab HTML and parse. Used to find manifest URL and metadata.
    const dom = new jsdom.JSDOM(response.body);
    const doc = dom.window.document;

    // Search through the Link tags to find the manifest link tag
    const manifestTag = Array.from(doc.getElementsByTagName("link")).find(
      (link) => link.getAttribute("rel") === "manifest"
    );

    // If no manifestTag can be found then no icon url can be generated
    if (!manifestTag) {
      return;
    }

    // Use URL to get the manifestPath as this will clean it. We don't grab
    // the url created as it doesn't include the skylink.
    const { pathname: manifestPath } = new URL(
      manifestTag.getAttribute("href"),
      skylinkUrl
    );

    // Create the manifestUrl
    const manifestUrl = skylinkUrl + manifestPath;

    // Grab the json of the manifest
    const manifestResponse = await got(manifestUrl);
    const manifest = JSON.parse(manifestResponse.body);

    // Grab the iconPath or the src path of the first icon listed if they
    // are present
    const icon = manifest.icons[0].src || manifest.iconPath || undefined;
    if (!icon) {
      return;
    }

    // Generate the iconUrl and iconPath
    const { href: iconUrl, pathname: iconPath } = new URL(icon, manifestUrl);

    // Check if the skylink is in the iconPath, for some reason it is not
    // always present. I'm not sure if it is because of some characters in
    // the skylink impacting the new URL method.
    let newIconPath = iconPath;
    let newIconUrl = iconUrl;
    if (!newIconUrl.includes(skylink)) {
      newIconPath = "/" + skylink + newIconPath;
      newIconUrl = portal + newIconPath;
    }

    // Query the iconUrl to confirm it is valid
    await got(newIconUrl);

    // Return the iconPath
    return newIconPath.replace(`/${skylink}`, "");
  } catch (error) {
    return;
  }
}
