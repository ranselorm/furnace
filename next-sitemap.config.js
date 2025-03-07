/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.caesarfurnacegh.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/admin", "/dashboard"],
  changefreq: "daily",
  priority: 0.7,
};
