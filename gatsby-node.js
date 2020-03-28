/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import fs from "fs-extra-promise";
import sm from "sitemap"; // npm install --save sitemap

function pagesToSitemap(pages) {
  const urls = pages.map(p => {
    if (p.path !== undefined) {
      return {
        url: p.path,
        changefreq: "daily",
        priority: 0.7
      };
    }
  });
  // remove undefined (template pages)
  return urls.filter(u => u !== undefined);
}

function generateSiteMap(pages) {
  const sitemap = sm.createSitemap({
    hostname: "https://www.ltlsurfcharters.com/",
    cacheTime: "60000",
    urls: pagesToSitemap(pages)
  });
  console.log("Generating sitemap.xml");
  fs.writeFileSync(`${__dirname}/src/sitemap.xml`, sitemap.toString());
}

export function postBuild(pages, callback) {
  generateSiteMap(pages);
  callback();
}
