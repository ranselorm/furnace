/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.caesarfurnacegh.com", // Your website URL
  generateRobotsTxt: true, // Generate a robots.txt file
  sitemapSize: 5000, // Maximum number of URLs per sitemap file
  exclude: ["/admin", "/dashboard"], // Exclude sensitive routes
  changefreq: "daily", // Tell search engines how often pages update
  priority: 0.7, // Default priority for pages
};
